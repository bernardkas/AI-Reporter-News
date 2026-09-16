
import os
from dotenv import load_dotenv
import json
import re 
from openai import OpenAI


from xai_sdk import Client
from xai_sdk.chat import user, system
from xai_sdk.search import SearchParameters

load_dotenv()

# client = OpenAI(
#     api_key=os.getenv("OPENAI_API_KEY"),
# )

client = Client(api_key=os.getenv("XAI_API_KEY"))


def fetch_news_from_ai(prompt: str) -> list[dict]:
    system_message = """
    You are a news aggregator AI. Your task is to find top news articles based on the user's prompt and provide the information in a strict JSON array format.
    1. Only include news articles published **within the last 3 hours** from the current time. Discard anything older.
    For each news article, include the following fields:
    - "title": (string) The main headline of the news.
    - "excerpt": (string) A short summary or the first few sentences.
    - "description": (string) A detailed description of the news content. This must be at least 7000 characters long and should provide in-depth coverage of the story, including background, implications, key events, quotes if relevant, and any context needed to fully understand the topic.
    - "image": (string, URL) A direct URL to the main image from the original source (not a placeholder or markdown). This must be a **real image URL** and must be retrievable in a browser. If not available, return an empty string.
    - "date": (string, ISO 8601 format like "YYYY-MM-DDTHH:MM:SSZ") The publication date and time.
    - "tag": (array of strings) Keywords or short phrases related to the news.
    - "category": (string) The main category of the news (e.g., 'Politics', 'Sports', 'Technology').
    - "references_links": (array of objects) A list of source references, each with "source_name" (string) and "url" (string, URL).

    Ensure the output is a valid JSON array. Do NOT include any conversational text or markdown outside the JSON array.
    Example:
    [
      {
        "title": "Example News Title 1",
        "excerpt": "This is a short excerpt of the first news article.",
        "description": "A longer description providing more details about the first news story, its background, and implications.",
        "image": "https://example.com/image1.jpg",
        "date": "2025-07-12T17:38:50.123Z",
        "tag": ["example", "news", "technology"],
        "category": "Technology",
        "references_links": [{"source_name": "Tech Daily", "url": "[https://techdaily.com/article1](https://techdaily.com/article1)"}]
      }
    ]
    """




    # response = client.chat.completions.create(
    #     model="gpt-4o-search-preview",
    #     messages=[
    #         {"role": "system", "content": system_message},
    #         {"role": "user", "content": prompt}
    #     ],
    #     # response_format={"type": "json_object"} # Keep this to encourage JSON output
    # )
    # response_text = response.choices[0].message.content

    chat_session = client.chat.create(
            model="grok-3", # Use "grok-1" or "grok-4" based on access/preference
            search_parameters=SearchParameters(mode="auto"),
            messages=[
                system(system_message), # Use the system message
                user(prompt)           # Add the user's prompt
            ]
        )

    # Sample the response from the chat session
    response = chat_session.sample()

    # The content is directly available from response.content
    response_text = response.content
    print("Raw AI response from Grok:")
    print(response_text)

    # Parse the response
    return parse_response(response_text)



def parse_response(response_text: str) -> list[dict]:
    """
    Parses the AI's response text, robustly extracting JSON, into a list of dictionaries.
    """
    json_str = ""
    try:
        # Step 1: Attempt to extract JSON from markdown code blocks first
        if response_text.strip().startswith("```json"):
            match = re.search(r"```json\s*(.*?)\s*```", response_text, re.DOTALL)
            if match:
                json_str = match.group(1).strip()
            else:
                # Fallback if opening ```json is there but no closing
                json_str = response_text.strip()[len("```json"):].strip()
        else:
            # Step 2: If no markdown block, try to find the outermost JSON array/object
            # This regex looks for the first '[' and last ']' for an array
            # or first '{' and last '}' for an object.
            # It's more forgiving if there's leading/trailing text.
            match_array = re.search(r"\[.*\]", response_text, re.DOTALL)
            match_object = re.search(r"\{.*\}", response_text, re.DOTALL)

            if match_array and (not match_object or match_array.span()[1] > match_object.span()[1]):
                # Prioritize array if found or if it's the dominant structure
                json_str = match_array.group(0).strip()
            elif match_object:
                json_str = match_object.group(0).strip()
            else:
                # If neither found, assume the whole text *should* be JSON and try directly
                json_str = response_text.strip()

        if not json_str:
            print(f"Warning: Could not extract any potential JSON string from response: {response_text}")
            return []

        parsed_data = json.loads(json_str)

        # Ensure the parsed data is a list of dictionaries
        if not isinstance(parsed_data, list):
            # If the AI wrapped an array in an object (e.g., {"articles": [...]})
            if isinstance(parsed_data, dict):
                # Try common keys for lists within objects
                for key in ["news","news_articles", "articles", "data", "items"]:
                    if key in parsed_data and isinstance(parsed_data[key], list):
                        parsed_data = parsed_data[key]
                        break
                else:
                    print(f"Warning: AI response is a JSON object, but no expected list key found. Full JSON: {json_str}")
                    return [] # No list found within the object
            else:
                print(f"Warning: AI response is not a direct JSON array or expected object. Full response: {json_str}")
                return [] # Not a list or a dict

        # Basic validation for each item in the list
        validated_articles = []
        required_keys = ["title", "excerpt", "description", "image", "date", "tag", "category", "references_links"]
        for item in parsed_data:
            if isinstance(item, dict) and all(k in item for k in required_keys):
                validated_articles.append(item)
            else:
                # Log detailed info for malformed items
                missing_keys = [k for k in required_keys if k not in item]
                print(f"Warning: Malformed news item in AI response. Missing keys: {missing_keys}. Item data: {item}")
        return validated_articles
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}")
        print(f"Raw AI response that caused error:\n{response_text}")
        print(f"Attempted JSON string:\n{json_str}") # Print the string that failed to parse
        return []
    except Exception as e:
        print(f"An unexpected error occurred during parsing: {e}")
        print(f"Raw AI response: {response_text}")
        print(f"Attempted JSON string: {json_str}")
        return []

