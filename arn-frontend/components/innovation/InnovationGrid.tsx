import { NewsArticle } from '@/types/news';
import NewsCard from '../shared/NewsCard';

const InnovationGrid = ({
  articles,
  title,
}: {
  articles: NewsArticle[];
  title: string;
}) => {
  return (
    <div className='mb-12'>
      <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center'>
        {title}
        <span className='ml-3 w-12 h-px bg-gray-300 flex-grow'></span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.map(article => (
          <NewsCard key={article.id} news={article} />
        ))}
      </div>
    </div>
  );
};

export default InnovationGrid;
