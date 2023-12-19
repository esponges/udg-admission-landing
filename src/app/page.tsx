/* eslint-disable max-len */
import CasesSection from '@/components/sections/home/CasesSection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import ListSection from '@/components/sections/home/ListSection';
import PricingTable from '@/components/sections/home/PricingTable';
import SocialProof from '@/components/sections/home/SocialProof';
import VideoSection from '@/components/sections/home/VideoSection';
import HeroSection from '@/components/sections/home/HeroSection';
import { AssisstantMessage } from '@/components/atoms/AssisstantMessage';
import { UserMessage } from '@/components/atoms/UserMessage';
import { ChatSection } from '@/components/molecules/ChatSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ChatSection />
      <SocialProof />
      <PricingTable />
    </main>
  );
}
