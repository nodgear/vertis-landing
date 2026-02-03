import Hero from "@/components/Hero";
import AboutUs2 from "@/components/AboutUs2";
import Facility from "@/components/Facility";
import BestResort from "@/components/BestResort";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs2 />
      <Facility />
      {/* <BestResort  /> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
