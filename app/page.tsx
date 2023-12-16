import Image from 'next/image'
import Hero from './components/Hero'
import NewProd from './components/NewProd'
import Points from './components/Points'
import Impact from './components/Impact'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <Hero />
    <NewProd />
    <Impact />
    <Points />
    <Blog />
    <Newsletter />
    </main>
  )
}
