"use client";
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Reviews } from '@/components/Reviews';
import { Order } from '@/components/Order';
import { SectionHeader } from '@/components/SectionHeader';
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'

const Book = () => {
  return (
    <div className='bg-white'>
      <Banner/>
      <Navigation/>
      <SectionHeader title="Todd's Book"/>
      <Order/>
      <Reviews/>
      <Footer/>
    </div>
    
  )
}

export default Book
