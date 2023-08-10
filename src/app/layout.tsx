import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

import './globals.css'

import PopoverDemo from "@/components/popover";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <body className={`${poppins.className} h-screen`}>
        <header className={'w-full border-b flex items-center'}>
          <div className={'container py-6 w-full justify-between flex px-4'}>
            <Link href={'/'} className={'text-2xl md:text-3xl font-medium text-red-600'}>
              Mad Til To
            </Link>
            <PopoverDemo />
          </div>
        </header>
        <main className={'py-10'}>{children}</main>
      </body>
    </html>
  )
}
