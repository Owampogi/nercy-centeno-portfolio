import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://nercycenteno.com"),
  title: {
    default: "Nercy Joshua B. Centeno — AI Automation Specialist | Client Success Manager | Project Manager",
    template: "%s | Nercy Joshua B. Centeno",
  },
  description:
    "Helping businesses streamline operations, automate repetitive work, improve customer experiences, and scale efficiently through AI-powered systems and operational excellence.",
  keywords: [
    "AI Automation Specialist",
    "n8n Automation Expert",
    "Workflow Automation Consultant",
    "Client Success Manager",
    "Project Manager",
    "Business Process Automation",
    "AI Operations Specialist",
    "Customer Success Professional",
    "Nercy Centeno",
    "AI Automation Philippines",
    "Business Automation Consultant",
    "Workflow Design Expert",
  ],
  authors: [{ name: "Nercy Joshua B. Centeno" }],
  creator: "Nercy Joshua B. Centeno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nercycenteno.com",
    siteName: "Nercy Joshua B. Centeno",
    title: "Nercy Joshua B. Centeno — AI Automation Specialist",
    description:
      "Helping businesses streamline operations, automate repetitive work, improve customer experiences, and scale efficiently through AI-powered systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nercy Joshua B. Centeno — AI Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nercy Joshua B. Centeno — AI Automation Specialist",
    description:
      "Helping businesses streamline operations, automate repetitive work, and scale through AI-powered systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nercy Joshua B. Centeno",
    url: "https://nercycenteno.com",
    email: "nercy.centeno.freelancer@gmail.com",
    jobTitle: "AI Automation Specialist",
    description:
      "Helping businesses streamline operations, automate repetitive work, improve customer experiences, and scale efficiently through AI-powered systems and operational excellence.",
    sameAs: ["https://www.linkedin.com/in/nercy-centeno/"],
    knowsAbout: [
      "AI Automation",
      "Workflow Design",
      "Customer Success",
      "Project Management",
      "Business Process Optimization",
      "n8n",
      "API Integrations",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "AI Automation Specialist",
        description:
          "Designing and implementing intelligent automation systems for business operations.",
      },
      {
        "@type": "Occupation",
        name: "Client Success Manager",
        description:
          "Managing client relationships, ensuring satisfaction, and driving retention.",
      },
      {
        "@type": "Occupation",
        name: "Project Manager",
        description:
          "Leading cross-functional teams and managing project lifecycles.",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <ScrollToTop />
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}