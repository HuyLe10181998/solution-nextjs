import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/css/globals.css";
import "@/assets/css/main.css"
import "@/assets/css/animate.css"
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { getInfo } from "@/actions/info.action";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Socially",
  description: "A modern social media application powered by Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getInfo() 
  if(data.error === "Unauthorized"){
    redirect('/login')
  }

  return (
      <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
               <Header />
                <div className="bg-slate-100">
                 
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
