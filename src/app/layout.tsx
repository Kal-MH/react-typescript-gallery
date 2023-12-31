import "./globals.css";
import type { Metadata } from "next";
import { Bree_Serif } from "next/font/google";
import { Providers } from "./providers";
import Footer from "@/layouts/footer/Footer";
import { CSSReset } from "@chakra-ui/react";
import MSW from "@/components/common/MSW";

// const inter = Inter({ subsets: ["latin"] });
const breeSerif = Bree_Serif({
  weight: ["400"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={breeSerif.className}>
        <CSSReset />
        <MSW>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </MSW>
      </body>
    </html>
  );
}
