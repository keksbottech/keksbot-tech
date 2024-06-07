import About from "@/sections/about/About";
import Features from "@/sections/features/Features";
import LandingSection from "@/sections/landing/LandingSection";
import Testimonials from "@/sections/testimonials/Testimonials";
import WhyChooseUs from "@/sections/why choose us/WhyChooseUs";

export default function Home() {
  return (
    <main >
      <LandingSection />
      <Features />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
