import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='max-w-5xl mx-auto py-10 px-4 space-y-6'>
      <Skeleton className='h-10 w-3/4' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-full' />
      <Skeleton className='h-6 w-5/6' />
      <Skeleton className='h-96 w-full rounded-xl' />
      <div className='flex gap-4 mt-8'>
        <Skeleton className='h-32 w-1/3 rounded-xl' />
        <Skeleton className='h-32 w-1/3 rounded-xl' />
        <Skeleton className='h-32 w-1/3 rounded-xl' />
      </div>
    </div>
  );
}
