"use client"
import { Navigation } from '@/components/Navigation'
import { Portfolio } from '@/components/Portfolio';
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { SectionHeader } from '@/components/SectionHeader';

const PortfolioPage = () => {
  return (
    <>
    <Banner/>
    <Navigation/>
    <SectionHeader title="Portfolio"/>
    <Portfolio/>
    <Footer/>
    </>
  )
}

export default  PortfolioPage