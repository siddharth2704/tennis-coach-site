import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Coaching from "@/components/sections/Coaching";
import Achievements from "@/components/sections/Achievements";
import AuthorSection from "@/components/sections/AuthorSection";
import MediaGallery from "@/components/sections/MediaGallery";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Hero />
      <Journey />
      <Coaching />
      <Achievements />
      <AuthorSection />
      <MediaGallery />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
