'use client'
import React from 'react'
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { PodcastSection } from '@/components/PodcastSection';
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'

const Podcasts = () => {
  return (
    <>
      <Banner/>
      <Navigation/>
      <SectionHeader title="Podcasts"/>
      <PodcastSection/>
      <Footer/>
    </>
  )
}

export default Podcasts
