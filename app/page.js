import Image from 'next/image'
import Care from '@/components/Care';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Products from '@/components/Product';
import Services from '@/components/Services';
import Reference from '@/components/Reference';


export default function Home() {
  return (
    <>
    <Hero />
    <Services />
    <Products />
    <Reference />
    <Care />
    <Footer />
  </>
  )
}
