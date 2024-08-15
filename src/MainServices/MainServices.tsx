import Navbar from "../Navbar/Navbar";
import HomeContact from "../HomeContact/HomeContact";
import Footer from "../Footer/Footer";
import HomeServices from "../HomeServices/HomeServices";
import ScrollTopOnMount from "../ScrollTopOnMount";
import { useRef } from "react";

function MainServices() {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ScrollTopOnMount />
      <section>
        <Navbar scrollToContact={() => scrollToSection(contactRef)} />
      </section>
      <section style={{ marginTop: "10rem", marginBottom: "4rem" }}>
        <HomeServices />
      </section>
      <HomeContact />
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainServices;
