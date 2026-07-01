import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PillarsSection } from "@/components/PillarsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { AudienceSection } from "@/components/AudienceSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection, Footer } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">

      <Header />

      <main className="relative">
        <HeroSection />
        <PillarsSection />
        <HowItWorksSection />
        <AudienceSection />
        <TestimonialSection
          title="What Our Users Say"
          subtitle="Real stories from businesses that transformed their online presence with our AI platform."
          testimonials={[
            {
              quote: "We launched our new site in under 10 minutes. The AI understood exactly what we needed and delivered a polished, professional website.",
              author: "Sarah Chen",
              role: "Founder, Bloom Studio",
              avatar: "https://i.pravatar.cc/150?img=1",
            },
            {
              quote: "The best investment we made this year. Our conversion rate jumped 40% after switching to the new AI-built site.",
              author: "Marcus Rivera",
              role: "Marketing Director, NovaTech",
              avatar: "https://i.pravatar.cc/150?img=3",
            },
            {
              quote: "I expected a basic template, but the AI created something uniquely ours. It felt like having a senior designer on call.",
              author: "Emily Nakamura",
              role: "Owner, Ember & Oak",
              avatar: "https://i.pravatar.cc/150?img=5",
            },
            {
              quote: "From idea to live site in one afternoon. The speed and quality completely changed how we approach our web presence.",
              author: "David Osei",
              role: "CEO, BrightPath",
              avatar: "https://i.pravatar.cc/150?img=7",
            },
            {
              quote: "Our customers constantly compliment the site. It looks premium, loads fast, and works perfectly on every device.",
              author: "Lina Petrova",
              role: "Creative Director, Forma",
              avatar: "https://i.pravatar.cc/150?img=9",
            },
          ]}
        />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
