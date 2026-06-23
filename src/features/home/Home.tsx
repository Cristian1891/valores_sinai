import { Hero } from './components/Hero';
import { AboutPreview } from './components/AboutPreview';
import { DonationSummary } from './components/DonationSummary';
import { CommunitySummary } from './components/CommunitySummary';
import { TestimonialesImpactoSection } from './components/TestimonialesImpactoSection/TestimonialesImpactoSection';
// import { SponsorsSlider } from './components/SponsorsSlider';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Contact } from './components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <CommunitySummary />
      <TestimonialesImpactoSection />
      {/* <SponsorsSlider /> */}
      <DonationSummary />
      <SocialMediaSection />
      <Contact />
    </>
  );
};