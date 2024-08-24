'use client';

// Packages
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useProfile } from 'nostr-hooks';

// Components
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

import { Zap } from '../zap';

export function Home() {
  const { profile } = useProfile({ pubkey: 'cee287bb0990a8ecbd1dee7ee7f938200908a5c8aa804b3bdeaed88effb55547' });

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6 max-w-[400px] h-full mx-auto px-4'>
        <h1 className='text-3xl font-extrabold'>Next-Nostr-Starter-Kit</h1>

        <div className='flex flex-col gap-2 w-full'>
          {profile ? (
            <div className='flex items-center gap-2 p-4 bg-card rounded-lg'>
              <Avatar>
                <AvatarImage src={profile?.image} />
                <AvatarFallback>{profile?.name?.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-0'>
                <h3 className='font-bold text-md'>Send SATs to {profile?.displayName}</h3>
                <p className='font-sm text-muted-foreground'>{profile?.lud16}</p>
              </div>
            </div>
          ) : (
            <Skeleton className='w-full h-[80px] bg-card' />
          )}
          <div className='flex gap-2'>
            <Button className='flex-1' asChild variant='secondary'>
              <Link href='https://github.com/unllamas/next-nostr-starter-kit' target='_blank' rel='noreferrer'>
                <GitHubLogoIcon />
                <p className='ml-2'>GitHub</p>
              </Link>
            </Button>

            <Zap />
          </div>
        </div>
      </div>
    </>
  );
}
