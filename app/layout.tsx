import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Basa Inc',
  description: 'Pioneering excellence in mining equipment, PPE, medical sundries, and pharmaceuticals. Where innovation meets reliability.',
  generator: 'aurorasystems.co.zw',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
