import Brochure from "../Brochure/Brochure";
import Footer from "../Footer/Footer";
import HomeContact from "../HomeContact/HomeContact";
import Navbar from "../Navbar/Navbar";

function MainBrochure() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section style={{ marginTop: "10rem", marginBottom: "4rem" }}>
        <Brochure />
      </section>
      <HomeContact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainBrochure;
