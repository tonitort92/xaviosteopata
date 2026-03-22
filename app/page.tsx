import Hero from "@/components/Hero";
import ForYou from "@/components/ForYou";
import Services from "@/components/Services";
import CompareTable from "@/components/CompareTable";
import Testimonials from "@/components/Testimonials";
import Profile from "@/components/Profile";
import WhyXavi from "@/components/WhyXavi";
import Applications from "@/components/Applications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ForYou />
      <Services />
      <CompareTable />
      <Testimonials />
      <Profile />
      <WhyXavi />
      <Applications />
      <Contact />
      <Footer />
    </main>
  );
}
