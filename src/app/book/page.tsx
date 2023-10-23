"use client";
import React from 'react';
import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAmazon } from '@fortawesome/free-brands-svg-icons';
// import { BookSection } from '@/components/BookSection';
import { Navigation } from '@/components/Navigation';
import { Testimonials } from '@/components/Testimonials';
import { Order } from '@/components/Order';
import { SectionHeader } from '@/components/SectionHeader';

const Book = () => {
  return (
    <div className='bg-white'>
      <Navigation/>
      <SectionHeader title="Todd's Book"/>
      <Order/>
      <Testimonials/>
    </div>
    
  )
}

export default Book
