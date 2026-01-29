import Image from "next/image";
import B2BSection from "../components/sections/B2BSection";
import CakeVarieties from "../components/sections/CakeVarieties";
import CorporateSection from "../components/sections/CorporateSection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import OrderForm from "../components/sections/OrderForm";
import PremiumGiftBox from "../components/sections/PremiumGiftBox";
import PromotionSection from "../components/sections/PromotionSection";
import Testimonials from "../components/sections/Testimonials";
import ThreeBoxSection from "../components/sections/ThreeBoxSection";
import TwoBagSection from "../components/sections/TwoBagSection";
import Product from "../components/sections/Product";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto">
      <HeroSection />
      <Image src="/bg/banner.png" alt="banner" width={1920} height={1080} />
      <Product />
      {/* <PremiumGiftBox  />
      <B2BSection />
      <TwoBagSection />
      <CorporateSection />
      <PromotionSection />
      <ThreeBoxSection />
      <CakeVarieties />
      <OrderForm />
      <Testimonials /> */}
      <Footer />
    </main>
  );
}