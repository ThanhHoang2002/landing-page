import Image from "next/image";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import Product from "../components/sections/Product";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Image className="mt-[60px] sm:mt-[70px] md:mt-[84px] w-full" src="/bg/banner.svg" alt="banner" width={1920} height={1080} />
      <Product />
      <Image src="/bg/feedback.svg" className="w-full" alt="banner" width={1920} height={1080} />
      <Footer />
    </main>
  );
}