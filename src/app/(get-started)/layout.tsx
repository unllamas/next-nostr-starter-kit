'use client';

import dynamic from 'next/dynamic';

const AuthContext = dynamic(() => import('@/context/auth').then((mod) => mod.AuthContext), {
  loading: () => (
    <div className='flex justify-center items-center w-full h-full'>
      <p className='font-bold'>Loading...</p>
    </div>
  ),
  ssr: false,
});

const AuthLayout = dynamic(() => import('@/components/layouts/auth-layout').then((mod) => mod.AuthLayout), {
  loading: () => (
    <div className='flex justify-center items-center w-full h-full'>
      <p className='font-bold'>Loading...</p>
    </div>
  ),
  ssr: false,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext>
      <AuthLayout>{children}</AuthLayout>
    </AuthContext>
  );
}
