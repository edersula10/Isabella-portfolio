"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HealthcareSection from "@/components/HealthcareSection";
import ExperienceSection from "@/components/ExperienceSection";
import VolunteerSection from "@/components/VolunteerSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import BackgroundTexture from "@/components/BackgroundTexture";

export default function Home() {
  return (
    <>
      <BackgroundTexture />
      <FloatingParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <HealthcareSection />
        <ExperienceSection />
        <VolunteerSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
