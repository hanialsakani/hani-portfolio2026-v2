import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/sections/Hero";
import LatestInsights from "@/app/components/sections/LatestInsights";
import Impact from "@/app/components/sections/Impact";
import About from "@/app/components/sections/About";
import CaseFiles from "@/app/components/sections/CaseFiles";
import Experience from "@/app/components/sections/Experience";
import Skills from "@/app/components/sections/Skills";
import Credentials from "@/app/components/sections/Credentials";
import Contact from "@/app/components/sections/Contact";
import { getAllPosts } from "@/lib/posts";
import { SITE, SITE_URL } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Business Analyst",
  description: SITE.description,
  email: `mailto:${SITE.email}`,
  url: SITE_URL,
  sameAs: [SITE.linkedin.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greater London",
    addressCountry: "GB",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Kingston University" },
    { "@type": "CollegeOrUniversity", name: "The Open University" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "ECBA – Entry Certificate in Business Analysis",
    recognizedBy: { "@type": "Organization", name: "IIBA" },
  },
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <LatestInsights posts={posts} />
        <Impact />
        <About />
        <CaseFiles />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
