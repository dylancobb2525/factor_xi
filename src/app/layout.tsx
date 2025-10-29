import "./globals.css";
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Factor XI Learning Center | The Evolving Role of Anticoagulation',
  description: 'Establish a central resource to describe the benefits of the Factor XI/XIa Pathway Inhibition, while engaging multidisciplinary teams to identify appropriate acute coronary syndrome, secondary stroke prevention, and atrial fibrillation patients at risk for thrombotic events.',
  keywords: 'Factor XI, Factor XIa, anticoagulation, acute coronary syndrome, atrial fibrillation, secondary stroke prevention, thrombotic events, cardiology, CME',
  authors: [{ name: 'Preston Schlagheck' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Factor XI Learning Center | The Evolving Role of Anticoagulation',
    description: 'Establish a central resource to describe the benefits of the Factor XI/XIa Pathway Inhibition for acute coronary syndromes, atrial fibrillation, and secondary stroke prevention.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/glc.webp',
        width: 1200,
        height: 630,
        alt: 'Factor XI Learning Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factor XI Learning Center | The Evolving Role of Anticoagulation',
    description: 'Establish a central resource to describe the benefits of the Factor XI/XIa Pathway Inhibition for acute coronary syndromes, atrial fibrillation, and secondary stroke prevention.',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
