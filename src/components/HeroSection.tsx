"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onLearnMoreClick: () => void;
}

export function HeroSection({ onLearnMoreClick }: HeroSectionProps) {
  return (
    <section id="hero" className="w-full bg-white pt-10 sm:pt-14 relative overflow-hidden">
      
      {/* Top Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 px-6 sm:px-10 md:px-12 relative z-20">
        {/* Left Column: Big Bold Title */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium text-slate-900 tracking-tight leading-[1.1]">
            Let&apos;s Move Your <br />
            Business Forward
          </h1>
        </div>

        {/* Right Column: Paragraph & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 pb-2">
          <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-md bg-white/60 backdrop-blur-sm p-4 rounded-2xl -ml-4">
            End-to-end supply chain visibility — shipment tracking, fleet coordination, and warehouse management for goods on the move.
          </p>

          <button
            onClick={onLearnMoreClick}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Showcase Image Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] bg-white z-10">
        
        {/* Main 3D Containers Image */}
        <Image
          src="/hero-containers-white.jpg"
          alt="Axion Shipping Containers"
          fill
          priority
          className="object-cover object-top z-10"
          style={{ filter: "brightness(1.03) contrast(1.05)" }}
        />

        {/* Smaller Plane Left Side - Pushed further left/up to avoid ghosting overlap */}
        <div className="absolute -top-[80px] sm:-top-[120px] lg:-top-[150px] -left-[120px] sm:-left-[180px] lg:-left-[260px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] z-20 pointer-events-none opacity-95 select-none mix-blend-multiply">
          <Image
            src="/cargo-plane.jpg"
            alt="Cargo Plane Left"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Smaller Plane Right Side (Flipped) - Pushed further right/up to avoid ghosting overlap */}
        <div className="absolute -top-[60px] sm:-top-[100px] lg:-top-[120px] -right-[120px] sm:-right-[180px] lg:-right-[260px] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] z-20 pointer-events-none opacity-90 select-none mix-blend-multiply transform -scale-x-100 rotate-12">
          <Image
            src="/cargo-plane.jpg"
            alt="Cargo Plane Right"
            fill
            className="object-contain object-center"
          />
        </div>

      </div>
    </section>
  );
}
