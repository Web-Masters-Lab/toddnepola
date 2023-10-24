'use client'
import React from 'react'
import { Navigation } from '@/components/Navigation';
import { SectionHeader } from '@/components/SectionHeader';
import { Articles } from '@/components/Articles';

const News = () => {
  return (
    <>
      <Navigation/>
      <SectionHeader title="News Articles"/>
      <Articles/>
    </>
  )
}

export default News;
