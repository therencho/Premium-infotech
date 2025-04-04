import './globals.css'
import { Inter as GeistSans } from 'next/font/google'
import { Roboto_Mono as GeistMono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = GeistSans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = GeistMono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'GoFirst Tech - IT Solutions for Modern Business',
  description: 'We provide IT consultancy and tech support services tailored for your business needs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-16 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
