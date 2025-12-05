import Hero from "../components/Hero";
import Fragment from "../components/Fragment";
import Collection from "../components/Collection";
import Editorial from "../components/Editorial";
import Philosophy from "../components/Philosophy";
import BrandEssence from "../components/BrandEssence";
import Lineup  from "../components/Lineup";
import ContactSection from "../components/ContactSection";
import JournalCTA from "../components/JournalCTA";
import QuietCTA from "../components/QuietCTA"; 
import CategoryLinks from "../components/CategoryLinks";

export default function Home() {
  return (
    <div className="w-full bg-white text-[#111]">
      <main className="max-w-7xl mx-auto">
        <Hero />
        <Fragment />
            <div id="collection">
          <Collection />
        </div>
        <CategoryLinks />
        <Editorial />
        <Philosophy />
       <div id="about">
          <BrandEssence />
        </div>
        <Lineup />
        <JournalCTA />
     <div id="contact">
          <ContactSection />
        </div>
        <QuietCTA />
      </main>
    </div>
  );
}
