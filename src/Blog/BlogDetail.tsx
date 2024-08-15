import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import ScrollTopOnMount from "../ScrollTopOnMount";
import Footer from "../Footer/Footer";
import HomeContact from "../HomeContact/HomeContact";
import "./blogdeatils.scss";
import { useLocation } from "react-router-dom";

function BlogDetail() {
  const { state } = useLocation();
  const blog = state?.blog;

  if (!blog) return <div className="loading">Loading...</div>;

  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="blog-detail-page">
      <ScrollTopOnMount />
      <section>
        <Navbar scrollToContact={() => scrollToSection(contactRef)} />
      </section>
      <div className="blog-detail-container">
        <div className="content">
          <div className="blog-detail-image-wrapper">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-info">
            <h2>{blog.title}</h2>
          </div>
          <div className="blog-content">
            <p>{blog.content1}</p>
            <p>{blog.content2}</p>
            <p>{blog.content3}</p>
            <b>{blog.subhead}</b>
            <ul className="mt-3">
              <li>{blog.point1}</li>
              <li>{blog.point2}</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeContact />
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default BlogDetail;
