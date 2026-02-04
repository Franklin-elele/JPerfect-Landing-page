import AboutUs from "@/components/AboutUs";
import ContactPage from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <LocationSection />
      <ContactPage />
      <Footer />
    </>
  );
}
