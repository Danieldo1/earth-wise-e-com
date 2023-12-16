import type { Metadata } from 'next'
import { Lexend,Bebas_Neue } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import CartProvider from './components/Providers'
import Cart from './components/Cart'
import Footer from './components/Footer'

const lexend = Lexend({ subsets: ['latin'], weight: ['100','200','300','400', '500', '600', '700', '800', '900'], variable: '--font-lexend' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas' })
export const metadata: Metadata = {
  title: 'Earth Wise',
  description: 'Elevate Your Lifestyle, Sustainably With Earth Wise. Discover the Power of Nature.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${bebas.variable}`}>
        <CartProvider>
        <Nav />
        <Cart />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
