import ParticleBackground from "@/app/components/ParticleBackground";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import AchievementsSection from "@/app/components/AchievementsSection";
import SkillsSection from "@/app/components/SkillsSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import CertificationsSection from "@/app/components/CertificationsSection";
import EducationSection from "@/app/components/EducationSection";
import ContactSection from "@/app/components/ContactSection";
import MarqueeSection from "@/app/components/MarqueeSection";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <AchievementsSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <CertificationsSection />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <ContactSection />
      <MarqueeSection />
    </main>
  );
}
