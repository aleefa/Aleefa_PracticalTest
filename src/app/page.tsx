import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsBar } from "@/components/landing/StatsBar";
import { WhySection } from "@/components/landing/WhySection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { JourneyDrivers } from "@/components/landing/JourneyDrivers";
import { AppTestimonials } from "@/components/landing/AppTestimonials";
import { CtaFooter } from "@/components/landing/CtaFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <WhySection />
        <ServicesSection />
        <JourneyDrivers />
        <AppTestimonials />
        <CtaFooter />
      </main>
    </div>
  );
}
