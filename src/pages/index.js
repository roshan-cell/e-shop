import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ShoesKart - Buy from best</title>
        <meta name="description" content="ShoesKart - Buy from best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        <img src="/homeImage.png" alt="" />
      </div>
      

      <Footer />
    </>
  );
}
