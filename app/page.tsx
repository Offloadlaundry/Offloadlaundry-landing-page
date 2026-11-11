import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import BrandValue from "@/components/sections/BrandValue";
import EarlyAccessCTA from "@/components/sections/EarlyAccessCTA";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <HowItWorks />
        <BrandValue />
        <EarlyAccessCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
