import AboutComponent from '@/components/AboutComponent';
import CatalogSwiperSection from '@/components/CatalogSwiperCection';
import CatalogueSection from '@/components/CatalogueSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import LoadSheddingStatus from '@/components/LoadsheddingStatus';
import WeatherComponent from '@/components/WeatherSection';
import WhatToDo from '@/components/WhatToDo';
import Loadshed from '@/components/sections-added/Loadshed';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Loadshed />
      <WeatherComponent />
      <AboutComponent />
      <LoadSheddingStatus />
      <CatalogueSection />
      <WhatToDo />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
