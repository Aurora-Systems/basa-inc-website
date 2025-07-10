"use client" 
import type { Metadata } from 'next'
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Basa Inc',
//   description: 'Pioneering excellence in mining equipment, PPE, medical sundries, and pharmaceuticals. Where innovation meets reliability.',
//   generator: 'aurorasystems.co.zw',
// }
import {FloatingWhatsApp} from "react-floating-whatsapp"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp phoneNumber='+263773749881' accountName='Basa Inc'  avatar='https://ngratesc.sirv.com/basainc/logo_light.png'/>
      </body>
    </html>
  )
}
