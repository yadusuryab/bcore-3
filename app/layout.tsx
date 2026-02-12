import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import HomeNav from "@/components/homenav";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.bcore.in"),
  title: {
    default:
      "Bcore Computers & Tuition | Best Tuition & Computer Centre in Payyanur & Pilathara",
    template: "%s | Bcore Computers & Tuition",
  },
  description:
    "Bcore Computers & Tuition in Payyanur & Pilathara offers school tuition, MS Office, DCA, ADCA, Tally, Java, C/C++, tuition in Pilathara, Kannur. Call now!",
  keywords: [
    "bcore computers and tuition",
    "tuition center near me",
    "tuition center payyanur",
    "computer center pilathara",
    "computer center payyanur",
    "ms office pilathara",
    "tuition kannur",
    "dca payyanur",
    "adca payyanur",
    "tally course payyanur",
    "sree sankaracharya computer centre payyanur courses",
  ],
  alternates: {
    canonical: "https://www.bcore.in",
  },
  openGraph: {
    type: "website",
    url: "https://www.bcore.in",
    title:
      "Bcore Computers & Tuition | Best Tuition & Computer Centre in Payyanur & Pilathara",
    description:
      "MS Office, DCA, ADCA, Tally, school tuition (5th–10th), tuition in Kannur.",
    siteName: "Bcore Computers & Tuition",
    images: [
      {
        url: "https://www.bcore.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bcore Computers & Tuition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
    title:
      "Bcore Computers & Tuition | Best Tuition & Computer Centre in Payyanur & Pilathara",
    description:
      "Top tuition and computer training with MS Office, DCA, ADCA, Tally, Java, C/C++.",
    images: ["https://www.bcore.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "education",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
          <HomeNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
