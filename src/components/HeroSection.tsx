"use client";

import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-white pt-10 sm:pt-14 relative overflow-hidden">
      
      {/* Top Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 px-6 sm:px-10 md:px-12 relative z-20">
        {/* Left Column: Big Bold Title */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium text-slate-900 tracking-tight leading-none -mt-2">
            Let&apos;s Move Your <br />
            Business Forward
          </h1>
        </div>

        {/* Right Column: Paragraph */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:pt-2">
          <p className="text-slate-600 text-lg font-normal leading-relaxed max-w-md">
            Experience logistics made simple. Enjoy effortless, end-to-end visibility—from real-time shipment tracking to seamless warehouse management.
          </p>
        </div>
      </div>

      {/* Hero Showcase Image Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] bg-white z-10">
        
        {/* Main 3D Containers Image */}
        <Image
          src="/hero-containers-white.jpg"
          alt="Stacked shipping containers"
          fill
          priority
          className="object-cover object-top z-10"
          style={{ filter: "brightness(1.03) contrast(1.05)" }}
        />

        {/* Smaller Plane Left Side - Pushed further left/up to avoid ghosting overlap */}
        <div className="absolute -top-[80px] sm:-top-[120px] lg:-top-[150px] -left-[120px] sm:-left-[180px] lg:-left-[260px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] z-20 pointer-events-none opacity-95 select-none mix-blend-multiply">
          <Image
            src="/cargo-plane-v2.jpg"
            alt="Cargo Plane Left"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Smaller Plane Right Side (Flipped) - Pushed further right/up to avoid ghosting overlap */}
        <div className="absolute -top-[60px] sm:-top-[100px] lg:-top-[120px] -right-[120px] sm:-right-[180px] lg:-right-[260px] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] z-20 pointer-events-none opacity-90 select-none mix-blend-multiply">
          <Image
            src="/cargo-plane-right.jpg"
            alt="Cargo Plane Right"
            fill
            className="object-contain object-center"
          />
        </div>

      </div>
    </section>
  );
}
