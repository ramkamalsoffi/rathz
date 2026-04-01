import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import ProblemCta from '@/components/sections/ProblemCta';
import Features from '@/components/sections/Features';
import ScalableTeams from '@/components/sections/ScalableTeams';
import HowItWorks from '@/components/sections/HowItWorks';
import IndicatorStats from '@/components/sections/IndicatorStats';
// import RealResults from '@/components/sections/RealResults';
import SocialProof from '@/components/sections/SocialProof';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTA from '@/components/sections/CTA';
import WaveBackground from '@/components/visuals/WaveBackground';
// import FlowBackground from '@/components/visuals/FlowBackground';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <WaveBackground />
        {/* <FlowBackground /> */}

        <Hero />

        <ProblemSolution />
        {/* <ProblemCta /> */}
        <Features />
        <ScalableTeams />
        {/* <HowItWorks /> */}
        <IndicatorStats />
        {/* <RealResults /> */}
        <SocialProof />
        {/* <WhyChooseUs /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
