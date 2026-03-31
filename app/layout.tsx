import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isabella Mammoliti — Aspiring Physician | Biological Sciences",
  description:
    "Pre-medical student at the University of Guelph pursuing Biological Sciences with a passion for patient-centered care, community health, and clinical excellence.",
  openGraph: {
    title: "Isabella Mammoliti",
    description: "Aspiring Physician | Biological Sciences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
