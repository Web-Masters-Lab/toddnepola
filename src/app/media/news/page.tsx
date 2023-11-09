'use client'
import React from 'react'
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { Articles } from '@/components/Articles';
import { Banner } from '@/components/Banner'

const News = () => {
  return (
    <>
      <Banner/>
      <Navigation/>
      <SectionHeader title="News Articles"/>
      <Articles/>
    </>
  )
}

export default News;
