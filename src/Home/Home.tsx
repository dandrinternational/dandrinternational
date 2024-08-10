// import { useEffect, useRef } from "react";
import Brochure from "../Brochure/Brochure";
import ClientOpinion from "../ClientOpinion/ClientOpinion";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeContact from "../HomeContact/HomeContact";
import HomeServices from "../HomeServices/HomeServices";
import Navbar from "../Navbar/Navbar";
import "./home.scss";
function Home() {
  // const aboutRef = useRef<HTMLElement>(null);
  // const servicesRef = useRef<HTMLElement>(null);
  // const contactRef = useRef<HTMLElement>(null);
  // const brochureRef = useRef<HTMLElement>(null);

  // const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="main-home">
      <div className="first-section">
        {/* <ScrollTopOnMount /> */}

        <section>
          <Navbar
          // scrollToAbout={() => scrollToSection(aboutRef)}
          // scrollToServices={() => scrollToSection(servicesRef)}
          // scrollToContact={() => scrollToSection(contactRef)}
          // scrollToBrochure={() => scrollToSection(brochureRef)}
          />
        </section>
        <section>
          <HeroSection />
        </section>
        <section>
          <HomeAbout />
        </section>
        <section>
          <HomeServices />
        </section>
        <section>
          <Brochure />
        </section>
      </div>

      <section>
        <ClientOpinion />
      </section>
      <HomeContact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
