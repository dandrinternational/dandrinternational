import { useRef } from "react";
import Brochure from "../Brochure/Brochure";
import Footer from "../Footer/Footer";
import HomeContact from "../HomeContact/HomeContact";
import Navbar from "../Navbar/Navbar";
import ScrollTopOnMount from "../ScrollTopOnMount";
import "./mainBrochure.scss";
function MainBrochure() {
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
      <section className="main-brochure">
        <Brochure />
      </section>
      <HomeContact />
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainBrochure;
