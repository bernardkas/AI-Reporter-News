'use client';
import Image from 'next/image';
import { RelatedPosts } from './RelatedPosts';
import SidebarNewsCard from './SidebarNewsCard';
import { TrendingCard } from './TrendingCard';
import { ArticleMeta } from './ArticleMeta';
import { usePathname } from 'next/navigation';
import { NewsArticle } from '@/types/news';
import { formatRelativeTime } from '@/utils/formatRelativeTime';

import noPhoto from '@/assets/no-photo.jpg';

export const Details = ({
  article,
  relatedArticles = [],
  sidebarNews = [],
  trendingNews = [],
}: {
  article: NewsArticle;
  relatedArticles?: NewsArticle[];
  sidebarNews?: NewsArticle[];
  trendingNews?: NewsArticle[];
}) => {
  const pathname = usePathname();

  function formatArticleDescription(description: string): string[] {
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
    const paragraphs: string[] = [];

    let currentParagraph = '';
    let wordCount = 0;

    for (const sentence of sentences) {
      const sentenceWordCount = sentence.trim().split(/\s+/).length;
      currentParagraph += sentence.trim() + ' ';
      wordCount += sentenceWordCount;

      if (wordCount >= 100) {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = '';
        wordCount = 0;
      }
    }

    if (currentParagraph.trim()) {
      paragraphs.push(currentParagraph.trim());
    }

    return paragraphs;
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex-1'>
            <div className='mb-4'>
              <span className=' inline-flex  items-center mx-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800'>
                {article.category}
              </span>
            </div>

            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {article.title}
            </h1>

            <div className='flex flex-row justify-between items-center text-sm text-gray-500 mb-8'>
              <span>{formatRelativeTime(article.publishedAt)}</span>
              <ArticleMeta slug={pathname} />
            </div>

            <div className='relative rounded-xl overflow-hidden mb-8 h-[500px]'>
              <Image
                src={article.image || noPhoto}
                alt={article.title}
                layout='fill'
                objectFit='cover'
                className='rounded-xl'
              />
            </div>

            <div className='prose prose-lg max-w-none mb-8'>
              <p className=' text-gray-700 font-medium mb-8 text-2xl'>
                {article.excerpt}
              </p>

              {formatArticleDescription(article.description || '').map(
                (paragraph, index) => (
                  <p key={index} className='text-xl mb-4'>
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {article.references_links &&
              article.references_links.length > 0 && (
                <div className='mt-12 pt-8 border-t border-gray-200'>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    References
                  </h3>
                  <ul className='space-y-2'>
                    {article.references_links.map((ref, index) => (
                      <li key={index}>
                        <a
                          href={ref.url}
                          target='_blank'
                          className='flex items-center text-blue-600 hover:text-blue-800 hover:underline'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 mr-2'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                              fillRule='evenodd'
                              d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                              clipRule='evenodd'
                            />
                          </svg>
                          {ref.source_name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {relatedArticles.length > 0 && (
              <RelatedPosts articles={relatedArticles} />
            )}
          </div>

          <div className='w-full lg:w-80 flex-shrink-0 space-y-8'>
            {sidebarNews.length > 0 && (
              <div className='bg-white rounded-xl p-6 shadow-sm'>
                <h2 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                  Latest Updates
                  <span className='ml-2 w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-grow'></span>
                </h2>

                <div className='space-y-6'>
                  {sidebarNews.map(news => (
                    <SidebarNewsCard
                      key={news.id}
                      id={news.id}
                      title={news.title}
                      excerpt={news.excerpt || ''}
                      image={news.image || ''}
                      timeAgo={news.date}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {trendingNews.length > 0 && (
        <div className=' rounded-xl p-6 shadow-sm max-w-7xl mx-auto'>
          <h2 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
            Trending Now
            <span className='ml-2 w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-grow'></span>
          </h2>

          <div className='flex flex-col gap-4 '>
            {trendingNews.map(news => (
              <TrendingCard
                id={news.id}
                key={news.id}
                tag={news.tag || ''}
                image={news.image ?? ''}
                title={news.title}
                description={news.description || news.excerpt || ''}
                date={news.date}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
