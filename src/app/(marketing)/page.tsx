'use client';
import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('@/app/(marketing)/partial/HeroSection'), { ssr: false });

export default function Home() {
  return (
    <HeroSlider />
  );
}
