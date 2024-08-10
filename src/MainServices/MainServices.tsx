import Navbar from "../Navbar/Navbar";
import HomeContact from "../HomeContact/HomeContact";
import Footer from "../Footer/Footer";
import HomeServices from "../HomeServices/HomeServices";

function MainServices() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section style={{ marginTop: "10rem", marginBottom: "4rem" }}>
        <HomeServices />
      </section>
      <HomeContact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainServices;
