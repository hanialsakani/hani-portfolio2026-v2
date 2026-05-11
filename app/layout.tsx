import type { Metadata } from "next";
import { Geist, Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import ProgressBar from "@/app/components/ProgressBar";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hani Alsakani | Business Analyst & Data Analytics",
  description:
    "Professional portfolio of Hani Alsakani — Business Analyst and Data Analytics specialist based in Greater London, UK. ECBA certified with expertise in Tableau, Power BI, SQL, and process optimisation.",
  keywords: ["Business Analyst", "Data Analytics", "Tableau", "Power BI", "SQL", "ECBA", "London"],
  authors: [{ name: "Hani Alsakani" }],
};

const INIT_THEME_SCRIPT = `try{var t=localStorage.getItem('portfolio-theme');if(t==='executive')document.documentElement.setAttribute('data-theme','executive');}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-screen antialiased overflow-x-hidden">
        <script dangerouslySetInnerHTML={{ __html: INIT_THEME_SCRIPT }} />
        <ThemeProvider>
          <CustomCursor />
          <ProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
