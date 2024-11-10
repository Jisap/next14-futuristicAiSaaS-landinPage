import CallToAction from "@/sections/CallToAction";
import Companies from "@/sections/Companies";
import Features from "@/sections/Features";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import Footer from '../sections/Footer';




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}
