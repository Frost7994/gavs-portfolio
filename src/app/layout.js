// components
import { Providers } from "@/components/layout/providers";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

// utils
import { cn } from "@/lib/utils/cn";

// styling
import { Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

// meta
export const metadata = {
  title: "Dronans Wedding",
  description: "Generated by create next app",
};

// font
const font = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased grid min-h-screen grid-rows-1",
          font.className
        )}
      >
        <Providers>
          <Navbar />
          <main className="pt-16">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
