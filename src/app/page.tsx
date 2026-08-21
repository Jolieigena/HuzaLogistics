"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { useModals } from "@/context/ModalContext";

export default function Home() {
  const { openPreview } = useModals();

  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection onServiceClick={openPreview} />
      <IndustriesSection onIndustryClick={openPreview} />
    </>
  );
}
