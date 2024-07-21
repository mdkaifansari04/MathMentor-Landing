import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " MathMentor | AI-Powered Math Assistance and Learning Platform",
  description:
    "MathMentor offers an AI-powered platform for mastering math with real-time problem-solving and personalized assistance.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
      {/* <Brands /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
    </main>
  );
}
