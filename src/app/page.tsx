import Newsletter from "@/components/newsletter/Newsletter";
import About from "@/sections/about/About";
import Blog from "@/sections/page blog/Blog";
import Features from "@/sections/features/Features";
import LandingSection from "@/sections/landing/LandingSection";
import Partners from "@/sections/partners/Partners";
import Services from "@/sections/services/Services";
import Team from "@/sections/team/Team";
import Testimonials from "@/sections/testimonials/Testimonials";
import WhyChooseUs from "@/sections/why choose us/WhyChooseUs";
import BlogTemplate from "@/components/blog template/BlogTemplate";
import SectionBlog from "@/sections/section blog/SectionBlog";

export default function Home() {
  return (
    <main >
      <LandingSection />
      <Features />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Team />
      <SectionBlog />
      <Testimonials />l
    </main>
  );
}
