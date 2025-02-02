import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/css/globals.css";
import "@/assets/css/main.css"
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeaderTopStart from "@/components/HeaderTopStart";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Socially",
  description: "A modern social media application powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"></script>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen pt-24">
              <div className="sticky top-0 !z-[1001] bg-white">
                <HeaderTopStart />
                <Navbar />
              </div>

                {/* container to center the content */}
                <div className="mx-auto">
                 
                  {children}
                </div>
                <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
  );
}
