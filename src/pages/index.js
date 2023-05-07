import Image from 'next/image' 
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <Head>
       <title>ShoesKart - Buy from best</title>
       <meta name="description"  content="ShoesKart - Buy from best" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     
   </div>
  )
}
  