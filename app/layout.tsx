import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VOXORA AI - Intelligent Voice Assistant',
  description: 'Experience the future of AI-powered voice interaction with VOXORA AI. Advanced natural language processing, seamless integration, and intelligent responses.',
  keywords: ['AI', 'voice assistant', 'artificial intelligence', 'natural language processing', 'VOXORA'],
  authors: [{ name: 'VOXORA AI Team' }],
  openGraph: {
    title: 'VOXORA AI - Intelligent Voice Assistant',
    description: 'Experience the future of AI-powered voice interaction',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0d14' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  )
}
