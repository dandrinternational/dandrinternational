import Navbar from "../Navbar/Navbar";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./mainAbout.scss";
import HomeContact from "../HomeContact/HomeContact";
import Footer from "../Footer/Footer";
import ScrollTopOnMount from "../ScrollTopOnMount";
import { useRef } from "react";
function MainAbout() {
  const contactRef = useRef<HTMLElement>(null);
  // const brochureRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ScrollTopOnMount />
      <section>
        <Navbar scrollToContact={() => scrollToSection(contactRef)} />
      </section>
      <section className="MainAbout">
        <HomeAbout />
      </section>
      <HomeContact />
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainAbout;
