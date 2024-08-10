import Navbar from "../Navbar/Navbar";
import HomeAbout from "../HomeAbout/HomeAbout";
import "./mainAbout.scss";
import HomeContact from "../HomeContact/HomeContact";
import Footer from "../Footer/Footer";
function MainAbout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="MainAbout">
        <HomeAbout />
      </section>
      <HomeContact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainAbout;
