import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/assets/css/globals.css'
import '@/assets/css/main.css'
import '@/assets/css/animate.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { redirect } from 'next/navigation'
import { getInfo } from '@/actions/info.action'

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Sky Solution',
  description: 'Sky Solution',
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getInfo()
  if (data.error === 'Unauthorized') {
    redirect('/login')
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.0.0/dist/flowbite.min.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="https://api-solution-r8zk.onrender.com/uploads/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://api-solution-r8zk.onrender.com/uploads/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://api-solution-r8zk.onrender.com/uploads/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="https://api-solution-r8zk.onrender.com/uploads/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Header />
            <div className="bg-slate-100">{children}</div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
