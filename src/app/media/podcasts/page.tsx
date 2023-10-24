'use client'
import React from 'react'
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { PodcastSection } from '@/components/PodcastSection';

const Podcasts = () => {
  return (
    <>
      <Navigation/>
      <SectionHeader title="Podcasts"/>
      <PodcastSection/>
    </>
  )
}

export default Podcasts
