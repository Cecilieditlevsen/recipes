import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

import './globals.css'
import {Bars3Icon} from "@heroicons/react/24/outline";

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
            <button>
             <Bars3Icon className={'w-8 text-red-600 ml-5'} />
            </button>
          </div>
        </header>
        <main className={'py-10'}>{children}</main>
      </body>
    </html>
  )
}
