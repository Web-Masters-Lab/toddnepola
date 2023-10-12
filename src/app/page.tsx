'use client'
import { Navigation } from "../components/Navigation";
import { PageHero } from "../components/PageHero";
import { Footer } from "../components/Footer";
import { Media } from "../components/Media";

export default function Home() {
  return (
    <>  
    <Navigation/>
    <PageHero/>
    <Media />
    <Footer/>
    </>
  )
}
