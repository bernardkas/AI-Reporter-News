export const latestNews = {
  id: '32131321',
  title: 'Global Climate Summit Reaches Historic Agreement',
  excerpt: 'World leaders commit to unprecedented emissions reductions by 2030',
  category: 'Politics',
  date: '2 hours ago',
  image: '/climate-summit.jpg',
};

export const newsCardsData = [
  {
    id: 1,
    title: 'Tech Giant Unveils Revolutionary AI Assistant',
    excerpt:
      'New AI system can understand and respond to complex human emotions',
    category: 'Technology',
    date: '4 hours ago',
    image: '/ai-tech.jpg',
  },
  {
    id: 2,
    title: 'Stock Markets Reach All-Time High',
    excerpt: 'Global markets surge as economic recovery exceeds expectations',
    category: 'Business',
    date: '6 hours ago',
    image: '/stock-market.jpg',
  },
  {
    id: 3,
    title: 'Major Breakthrough in Cancer Research',
    excerpt:
      'Scientists discover new treatment showing 85% success rate in trials',
    category: 'Health',
    date: 'Yesterday',
    image: '/cancer-research.jpg',
  },
];

export const sampleNews = [
  {
    id: 1,
    title: 'Supreme Court Rules on Major Case Affecting Social Media',
    excerpt:
      'In a landmark decision, the Supreme Court has issued a ruling that could reshape how online platforms handle user content...',
    image:
      'https://dims.apnews.com/dims4/default/9c682dc/2147483647/strip/true/crop/4500x2998+0+1/resize/1360x906!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F96%2Fcc%2F7b4a0d4f47cb86fd47ec696dbadf%2Fap25178426698516.jpg',
    timeAgo: '3h ago',
  },
  {
    id: 2,
    title: 'Supreme Court Rules on Major Case Affecting Social Media',
    excerpt:
      'In a landmark decision, the Supreme Court has issued a ruling that could reshape how online platforms handle user content...',
    image:
      'https://dims.apnews.com/dims4/default/9c682dc/2147483647/strip/true/crop/4500x2998+0+1/resize/1360x906!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F96%2Fcc%2F7b4a0d4f47cb86fd47ec696dbadf%2Fap25178426698516.jpg',
    timeAgo: '3h ago',
  },
];

export const trendingNews = [
  {
    id: '1',
    tag: 'Hot Topic',
    excerpt: 'The Future of Remote Work Post-Pandemic',
    title: 'The Future of Remote Work Post-Pandemic',
    description:
      'Companies worldwide are redefining work policies as hybrid models become the new standard. Experts predict lasting changes to urban economies and commuting patterns.',
    date: '2 hours ago',
    image: 'https://example.com/image1.jpg',
    updatedAt: '3 hours ago',
  },
  {
    id: '2',
    tag: 'Trending Now',
    excerpt: 'The Future of Remote Work Post-Pandemic',
    title: 'The Future of Remote Work Post-Pandemic',
    description:
      'Companies worldwide are redefining work policies as hybrid models become the new standard. Experts predict lasting changes to urban economies and commuting patterns.',
    date: '2 hours ago',
    image: 'https://example.com/image1.jpg',
    updatedAt: '3 hours ago',
  },
  {
    id: '3',
    tag: 'Breaking News',
    excerpt: 'The Future of Remote Work Post-Pandemic',
    title: 'The Future of Remote Work Post-Pandemic',
    description:
      'Companies worldwide are redefining work policies as hybrid models become the new standard. Experts predict lasting changes to urban economies and commuting patterns.',
    date: '2 hours ago',
    image: 'https://example.com/image1.jpg',
    updatedAt: '3 hours ago',
  },
];

// lib/sport-data.ts
export interface SportNewsItem {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  views: number;
}

export interface SportHighlight {
  title: string;
  duration: string;
  date: string;
  views: number;
  league: string;
  time: string;
}

export interface SportMatch {
  team1: string;
  team2: string;
  score: string;
  status: string;
  league: string;
  minute: number;
}

export const sportNews = [
  {
    id: 1,
    title: 'Manchester United Signs New Star Striker for Record Fee',
    excerpt:
      'The Red Devils have broken their transfer record to sign the young sensation from France.',
    category: 'Football',
    date: '2 hours ago',
    image: '',
    views: 24,
  },
  {
    id: 1,
    title: 'NBA Finals: Warriors Take Game 1 in Overtime Thriller',
    excerpt:
      'Golden State Warriors defeated Boston Celtics in a thrilling overtime game to take 1-0 series lead.',
    category: 'Basketball',
    date: '5 hours ago',
    image: '',
    views: 18,
  },
  {
    id: 1,
    title: 'Olympic Champion Announces Retirement After 15-Year Career',
    excerpt:
      'The swimming legend has decided to hang up her goggles after an illustrious career.',
    category: 'Swimming',
    date: '1 day ago',
    image: '',
    views: 12,
  },
  {
    id: 1,
    title: 'Formula 1: Hamilton Wins Dramatic Monaco Grand Prix',
    excerpt:
      'Lewis Hamilton took his first victory of the season in a rain-affected Monaco Grand Prix.',
    category: 'Formula 1',
    date: '3 hours ago',
    image: '',
    views: 15,
  },
  {
    id: 1,
    title: 'Tennis: Djokovic Wins Historic 23rd Grand Slam Title',
    excerpt:
      "The Serbian star has surpassed Nadal to become the most successful men's singles player in history.",
    category: 'Tennis',
    date: '6 hours ago',
    image: '',
    views: 20,
  },
  {
    id: 1,
    title: 'Cricket World Cup: Australia Defeats India in Final',
    excerpt:
      'Australia claimed their sixth World Cup title with a dominant performance against the hosts.',
    category: 'Cricket',
    date: '1 day ago',
    image: '',
    views: 22,
  },
];

export const businessNews = [
  {
    title: 'Global Tech Giants Announce Major AI Partnership',
    excerpt:
      'Leading technology companies form alliance to accelerate responsible AI development and deployment across industries.',
    date: '2 hours ago',
    category: 'Technology',
    symbol: 'AI',
    image: '',
  },
  {
    title:
      'Federal Reserve Holds Interest Rates Steady Amid Economic Uncertainty',
    excerpt:
      'Central bank maintains current rate policy while signaling potential future adjustments based on inflation data.',

    date: '4 hours ago',
    category: 'Economy',
    symbol: 'FED',
    image: '',
  },
  {
    title: 'Major Retail Chain Announces Expansion Plan with 500 New Stores',
    excerpt:
      'Company plans aggressive growth strategy targeting underserved markets over the next three years.',

    date: '5 hours ago',
    category: 'Retail',
    symbol: 'RTL',
    image: '',
  },
  {
    title: 'Renewable Energy Stocks Surge After New Climate Legislation',
    excerpt:
      'Investors flock to green energy sector following passage of comprehensive climate investment package.',

    date: '6 hours ago',
    category: 'Energy',
    symbol: 'NRG',
    image: '',
  },
  {
    title: 'Global Supply Chain Disruptions Easing, Report Shows',
    excerpt:
      'New data indicates significant improvement in logistics bottlenecks as shipping dates return to pre-pandemic levels.',

    date: '7 hours ago',
    category: 'Logistics',
    symbol: 'LGS',
    image: '',
  },
  {
    title: 'Cryptocurrency Exchange Secures $300M in Funding Round',
    excerpt:
      'Platform plans to expand services and enhance security measures following successful investment.',

    date: '8 hours ago',
    category: 'Finance',
    symbol: 'CRYP',
    image: '',
  },
];

export const featuredArticle = {
  id: '1',
  title: 'Quantum Computing Breakthrough Achieves Quantum Advantage',
  excerpt:
    'Researchers have developed a new quantum processor that solves problems considered impossible for classical computers',
  content: 'Full content...',
  category: 'Quantum Computing',
  date: 'Jun 28, 2025',
  author: 'Dr. Elena Rodriguez',
  authorRole: 'Lead Researcher',
  company: 'QuantumLeap Labs',
  imageUrl: '/images/quantum-computer.jpg',
  isFeatured: true,
  tags: ['Quantum', 'Computing', 'Physics'],
};

export const latestArticles = [
  {
    id: 2,
    title: 'Neural Interface Allows Thought-Controlled Robotics',
    excerpt:
      'New brain-computer interface enables precise control of robotic limbs with neural signals',
    content: '...',
    category: 'Neurotech',
    date: 'Jun 27, 2025',
    image: '/images/neural-interface.jpg',
  },
  {
    id: 3,
    title: 'Neural Interface Allows Thought-Controlled Robotics',
    excerpt:
      'New brain-computer interface enables precise control of robotic limbs with neural signals',
    content: '...',
    category: 'Neurotech',
    date: 'Jun 27, 2025',
    author: 'Dr. Michael Chen',
    image: '/images/neural-interface.jpg',
  },
  {
    id: 4,
    title: 'Neural Interface Allows Thought-Controlled Robotics',
    excerpt:
      'New brain-computer interface enables precise control of robotic limbs with neural signals',
    content: '...',
    category: 'Neurotech',
    date: 'Jun 27, 2025',
    image: '/images/neural-interface.jpg',
  },
  // Add 5 more articles...
];

export const timelineArticles = [
  {
    id: 1,
    title: 'First AI-Human Collaboration Patent Filed',
    excerpt: 'A landmark patent marks the first official AI-human invention.',
    content: 'Full content of the timeline article...',
    category: 'AI',
    date: 'May 15, 2025',
    author: 'Dr. Jane Smith',
    authorRole: 'AI Researcher',
    imageUrl: '/images/ai-patent.jpg',
    tags: ['AI', 'Patent', 'Collaboration'],
  },
  // Add 4-5 timeline items...
];

// Travel
export const featuredTravel = {
  id: 1,
  title: 'Hidden Gems of Southeast Asia: Beyond the Tourist Trails',
  excerpt:
    'Discover secluded beaches and ancient temples untouched by mass tourism',
  image: '/images/southeast-asia.jpg',
  date: 'Jun 28, 2025',
  location: 'Southeast Asia',
  category: 'Adventure',
};

export const destinations = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    imageUrl: '/images/bali.jpg',
    rating: 4.8,
    description:
      'Island paradise with stunning beaches, vibrant culture, and lush landscapes',
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    imageUrl: '/images/kyoto.jpg',
    rating: 4.9,
    description:
      'Ancient temples, traditional tea houses, and beautiful cherry blossoms',
  },
  // Add 2-4 more destinations...
];

export const travelTips = [
  {
    id: 1,
    title: '10 Essential Phrases for Every Traveler',
    excerpt: 'Communication tips that will open doors in any country',
    image: '/images/language-tips.jpg',
    date: 'Jun 25, 2025',
    location: 'Global',
    category: 'Tips',
  },
  {
    id: 1,
    title: 'Packing Light: The Ultimate Guide',
    excerpt: 'How to fit everything you need in a single carry-on',
    image: '/images/packing.jpg',
    date: 'Jun 20, 2025',
    location: 'Global',
    category: 'Tips',
  },
  // Add 2-3 more tips...
];

// Mock data
export const article = {
  id: '1',
  title: 'Breakthrough in Quantum Computing Achieves Quantum Supremacy',
  excerpt:
    'Scientists have developed a quantum computer that solves problems considered impossible for classical computers',
  description: `
      <p class="mb-4">In a landmark achievement for quantum computing, researchers at QuantumLeap Labs have developed a quantum processor that can perform calculations in 200 seconds that would take the world's fastest supercomputer over 10,000 years to complete.</p>
      
      <p class="mb-4">The breakthrough represents the first definitive demonstration of quantum supremacy, where a quantum computer outperforms classical computers at a specific task. The team used a 53-qubit processor named "Sycamore" to perform a complex calculation involving random number generation that becomes exponentially more difficult as the number of qubits increases.</p>
      
      <h3 class="text-xl font-bold my-4">The Significance</h3>
      
      <p class="mb-4">This achievement marks a major milestone in quantum computing development. While practical applications are still years away, the demonstration proves that quantum computers can solve problems that are effectively impossible for classical computers.</p>
      
      <p class="mb-4">"This is the moment we've been working toward for decades," said Dr. Elena Rodriguez, lead researcher at QuantumLeap. "It's the 'hello world' moment for quantum computing, proving these machines can do something unique and valuable."</p>
      
      <h3 class="text-xl font-bold my-4">Future Applications</h3>
      
      <p class="mb-4">While the specific calculation performed has limited practical use, the technology paves the way for future applications in:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Drug discovery and molecular modeling</li>
        <li>Advanced cryptography</li>
        <li>Optimization problems in logistics and finance</li>
        <li>Artificial intelligence and machine learning</li>
        <li>Climate modeling and materials science</li>
      </ul>
    `,
  image:
    'https://static01.nyt.com/images/2019/10/24/world/23quantum1/23quantum1-jumbo.jpg?quality=75&auto=webp',
  date: '2 hours ago',
  tag: 'Innovation',
  updatedAt: '5 minutes ago',
  references: [
    { title: 'Nature Journal Publication', url: '#' },
    { title: 'QuantumLeap Labs Research Paper', url: '#' },
    { title: 'MIT Technology Review Analysis', url: '#' },
  ],
  author: {
    name: 'Dr. Michael Chen',
    role: 'Senior Science Correspondent',
    avatar: '/author-avatar.jpg',
  },
};

export const relatedArticles = [
  {
    id: '1',
    title: 'Global Tech Giants Form AI Ethics Consortium',
    excerpt:
      'Leading technology companies establish guidelines for responsible AI development',
    description: 'Full content...',
    image: '/ai-ethics.jpg',
    date: '4 hours ago',
    tag: 'AI',
  },
  {
    id: '2',
    title: 'Neural Network Breakthrough Enables Real-Time Language Translation',
    excerpt: 'New architecture reduces translation latency to under 50ms',
    description: 'Full content...',
    image: '/language-translation.jpg',
    date: '6 hours ago',
    tag: 'Technology',
  },
  {
    id: '3',
    title: 'Revolutionary Battery Tech Promises 1000km EV Range',
    excerpt:
      'Solid-state batteries enter mass production with industry-leading energy density',
    description: 'Full content...',
    image: '/battery-tech.jpg',
    date: '1 day ago',
    tag: 'Energy',
  },
];

export const sidebarNews = [
  {
    id: '1',
    title: 'Web3 Platform Raises $200M for Decentralized Social Network',
    excerpt:
      'New blockchain-based platform aims to challenge traditional social media giants',
    description: 'Full content...',
    image:
      'https://static01.nyt.com/images/2019/10/24/world/23quantum1/23quantum1-jumbo.jpg?quality=75&auto=webp',
    date: '30 minutes ago',
  },
  {
    id: '2',
    title: 'NASA Announces Artemis Moon Landing Sites',
    excerpt:
      'First human moon landing in 50 years to target lunar south pole region',
    description: 'Full content...',
    image:
      'https://static01.nyt.com/images/2019/10/24/world/23quantum1/23quantum1-jumbo.jpg?quality=75&auto=webp',
    date: '1 hour ago',
  },
  {
    id: '3',
    title: 'Breakthrough in Fusion Energy Achieves Net Energy Gain',
    excerpt:
      'Scientists reach major milestone in pursuit of limitless clean energy',
    description: 'Full content...',
    image:
      'https://static01.nyt.com/images/2019/10/24/world/23quantum1/23quantum1-jumbo.jpg?quality=75&auto=webp',
    date: '2 hours ago',
  },
];

export const trendingDetialsNews = [
  {
    id: '1',
    title: 'Metaverse Fashion Week Attracts Top Designers',
    description: 'Virtual fashion experiences gain traction with luxury brands',
    updatedAt: '15 minutes ago',
    tag: 'Trending',
  },
  {
    id: '2',
    title: 'CRISPR Gene Editing Approved for Sickle Cell Treatment',
    description: 'Landmark approval paves way for more genetic therapies',
    updatedAt: '45 minutes ago',
    tag: 'Health',
  },
  {
    id: '3',
    title: 'Carbon Capture Plant Begins Operations in Iceland',
    description:
      "World's largest facility aims to remove 4000 tons of CO2 annually",
    updatedAt: '1 hour ago',
    tag: 'Environment',
  },
];
