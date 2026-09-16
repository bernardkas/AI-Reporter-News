'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Share } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface ArticleMetaProps {
  slug: string;
}

export const ArticleMeta = ({ slug }: ArticleMetaProps) => {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const onCopyLink = () => {
    const fullUrl = `${origin}${slug}`;
    navigator.clipboard.writeText(fullUrl);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className='flex flex-row justify-between items-center text-sm text-gray-500 mb-8'>
      <DropdownMenu>
        <DropdownMenuTrigger className='text-gray-500 flex flex-row gap-1 items-center hover:text-gray-700 cursor-pointer'>
          Share
          <Share className='w-4 h-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={onCopyLink}>Copy Link</DropdownMenuItem>
          {/* Future: 
          <DropdownMenuItem onClick={handleFacebookShare}>Facebook</DropdownMenuItem>
          */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
