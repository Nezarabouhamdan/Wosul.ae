import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Section1/HeroSection";
import AboutSection from "@/components/Section2";
import PortfolioSection from "@/components/Section3/PortfolioSection";
import TestimonialSection from "@/components/Section4/TestimonialSection";
import FAQSection from "@/components/Section5/FAQSection";
import DigitalMarketingSection from "@/components/Section6/DigitalMarketingSection";
import Footer from "@/components/Section7/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialSection />
      <FAQSection />
      <DigitalMarketingSection />
      <Footer />
    </div>
  );
}
