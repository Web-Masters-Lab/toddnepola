'use client'
import React from 'react'
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { Articles } from '@/components/Articles';
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'

const News = () => {
  return (
    <>
      <Banner/>
      <Navigation/>
      <SectionHeader title="News Articles"/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default News;
