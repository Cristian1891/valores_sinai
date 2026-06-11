import { HeroOffer } from './components/HeroOffer';
import { FeaturedSpaces } from './components/FeaturedSpaces';
import { ImageGallery } from './components/ImageGallery';
import { Beneficiaries } from './components/Beneficiaries';
import { ContactOffer } from './components/ContactOffer';


export const WhatWeOffer = () => {
  return (
    <>
        <HeroOffer />
        <Beneficiaries />
        <FeaturedSpaces />
        <ImageGallery />
        <ContactOffer />
    </>
  );
};