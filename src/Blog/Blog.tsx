import React, { useRef } from "react";
import ScrollTopOnMount from "../ScrollTopOnMount";
import Navbar from "../Navbar/Navbar";
import "./blog.scss";
import Footer from "../Footer/Footer";
import HomeContact from "../HomeContact/HomeContact";
import { Link, NavLink, useNavigate } from "react-router-dom";
function Blog() {
  const navigate = useNavigate();
  const contactRef = useRef<HTMLElement>(null);
  // const brochureRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const blogData = [
    {
      id: 1,
      image: "aerial-view-cargo-ship-cargo-container-harbor.jpg",
      title: "Navigating China Import and Export in Kerala",
      text: "Understand the challenges and opportunities of importing and exporting between China and Kerala.",
      content1:
        "Stay informed about the latest trends and strategies in China import and export in Kerala, focusing on how local businesses can benefit from these opportunities.",
      content2: "Opportunities and Challenges in China-Kerala Trade ",
      content3:
        "Explore the dynamic trade relationship between China and Kerala. This page covers key opportunities for businesses, common challenges, and strategies to navigate the import-export landscape. Learn how to capitalize on market demands while adhering to regulations.",
      subhead:
        "Navigating China Import and Export in Kerala: Opportunities and Challenges",
      point1:
        "Keywords: China import and export in Kerala, Kerala trading company",
      point2:
        "Delve into the booming import and export relationship between China and Kerala. This post explores market opportunities, regulatory challenges, and tips for businesses looking to enter or expand in this sector.",
    },
    {
      id: 2,
      image: "logistics.jpg",
      title: "China International Trade: Essential Strategies",
      text: "Key insights on mastering China’s international trade dynamics.",
      content1:
        "Key insights on mastering China’s international trade dynamics.",
      content2: "Essential Strategies for Global Success ",
      content3:
        "Unlock the secrets of successful international trade with China. This page offers insights into market entry strategies, trade regulations, and building robust partnerships. Stay ahead in the competitive global market with expert advice on navigating China’s trade environment.",
      subhead: "Mastering China International Trade: Key Strategies for 2024",
      point1: "Keywords: China International Trade, global trade strategies",
      point2:
        "Learn essential strategies for successfully navigating China’s international trade landscape in 2024. This guide covers everything from market entry to establishing strong trade relationships and complying with regulations.",
    },
    {
      id: 3,
      image: "container-operation-port-series.jpg",
      title: "Streamlining China-Kerala Logistics",
      text: "Effective logistics strategies for seamless operations between China and Kerala.",
      content1:
        "Effective logistics strategies for seamless operations between China and Kerala.",
      content2: "Best Practices for Managing Operations in China ",
      content3:
        "Managing a business in China requires a deep understanding of local regulations, cultural nuances, and efficient operations. This page provides best practices for company registration, compliance, and overcoming common challenges in China’s business landscape.",
      subhead: "Streamlining China-Kerala Logistics for Better Efficiency",
      point1: "Keywords: China Kerala logistics, supply chain management",
      point2:
        "Efficient logistics are crucial for smooth trade between China and Kerala. This post discusses best practices for optimizing your supply chain, reducing costs, and ensuring timely deliveries.",
    },
    {
      id: 4,
      image: "modern-equipped-computer-lab.jpg",
      title: "Optimizing China Business Management",
      text: "Best practices for managing business operations in China, from company setup to compliance.",
      content1:
        "Best practices for managing business operations in China, from company setup to compliance.",
      content2: "Optimizing Logistics for Seamless Trade ",
      content3:
        "Efficient logistics are the backbone of successful trade between China and Kerala. This page focuses on optimizing supply chains, reducing costs, and ensuring timely delivery of goods. Learn about the best practices for managing logistics in this vital trade corridor.",
      subhead: "Optimizing China Business Management: Best Practices",
      point1: "Keywords: China Business Management, business operations",
      point2:
        "Get insights into managing business operations in China effectively. Topics include company registration, compliance, and strategies for overcoming common challenges in the Chinese market.",
    },
    {
      id: 5,
      image: "jolly-business-partners-discussing-sales-development-meeting.jpg",
      title: "Tax Consultation for Businesses in China",
      text: `Expert advice on navigating China’s tax regulations.  ‎   ‎ 
       ‎    ‎  ‎  ‎  ‎ `,
      content1: "Expert advice on navigating China’s tax regulations.",
      content2: "Navigating China’s Complex Tax Landscape ",
      content3:
        "Understanding China’s tax system is crucial for business success. This page provides practical advice on tax planning, compliance, and consultation services that can help businesses optimize their tax strategies and avoid common pitfalls.",
      subhead: "Navigating China Tax Consultation for Business Success",
      point1: "Keywords: China Tax Consultation, tax planning",
      point2:
        "Understand the complexities of China’s tax system and how expert consultation can benefit your business. This post offers practical advice on tax planning, compliance, and optimizing your tax strategy.",
    },
    {
      id: 6,
      image: "female-wedding-planner-working-ceremony.jpg",
      title: "Event Management in China: A Comprehensive Guide",
      text: "How to successfully plan and execute events in China.",
      content1: "How to successfully plan and execute events in China.",
      content2: "Comprehensive Guide to Event Planning in China ",
      content3:
        "Planning an event in China? This page covers everything you need to know, from selecting venues to navigating legal requirements and cultural considerations. Ensure your event is a success with expert tips and a step-by-step guide to event management in China.",
      subhead: "Event Management in China: A Comprehensive Guide",
      point1: "Keywords: China Event Management, corporate events in China",
      point2:
        "Planning an event in China? This guide covers everything you need to know, from selecting the perfect venue to navigating legal requirements and cultural considerations.",
    },
  ];

  return (
    <div>
      <ScrollTopOnMount />
      <section>
        <Navbar scrollToContact={() => scrollToSection(contactRef)} />
      </section>
      <div className="blog-container">
        <span className="blog-head" data-aos="fade-up" data-aos-duration="1000">
          {" "}
          - BLOG -{" "}
        </span>
        <div
          className=""
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ paddingBottom: "25px" }}
        >
          <p className="blog-text">
            Stay updated with the latest news, insights, and trends in the world
            of international trade, business management, logistics, and more.
            Our blog is designed to provide valuable information and tips to
            help you navigate the complexities of global trade and business
            operations. Explore our posts to learn more about how we can assist
            your business in thriving in the international market.
          </p>
        </div>
        <div className="blog-card-container">
          <div className="row">
            {blogData.map((blog) => (
              <div className="col-md-4 mt-4" key={blog.id}>
                <div
                  className="card"
                  onClick={() => navigate(`/blogdetail`, { state: { blog } })}
                >
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="blog-content-wrapper">
        <span className="blog-head" data-aos="fade-up" data-aos-duration="1000">
          {" "}
          - Latest Posts -{" "}
        </span>
        <div className="blog-content">
          <span className="blog-content-sub-head ">
            The Growth of China Import and Export in Kerala
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Discover how China import and export in Kerala is evolving. Learn
            about the key factors driving growth, the benefits for local
            businesses, and how D and R Goldenwing International Trading Company
            Ltd can help you leverage these opportunities for your business.
          </span>
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Why Choose a Kerala Trading Company for Your Business Needs
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Find out why partnering with a Kerala trading company like D and R
            Goldenwing International Trading Company Ltd is beneficial for your
            business. Explore our comprehensive services, local expertise, and
            commitment to client satisfaction.
          </span>
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Navigating the China Trading Company Landscape
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Get insights into the landscape of China International Trade.
            Understand the advantages of working with experienced professionals,
            the importance of reliable logistics, and how our multilingual staff
            ensures smooth communication and transactions.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Understanding China Exports and Their Impact on Global Trade
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Explore the significance of China exports in global trade. Learn
            about the latest trends, key products, and how D and R Goldenwing
            International Trading Company Ltd ensures quality and timely
            delivery for our clients worldwide.
          </span>
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Maximizing Benefits with D and R Goldenwing International Trading
            Company Ltd
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Learn how to maximize the benefits of our business management
            services, from company registration to tax consultation and
            logistics. Find out how our dedicated team supports your business
            needs and helps you achieve success in the international market.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Effective Strategies for Importing Goods from China to Kerala
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Discover effective strategies for logistics in China and Kerala. Get
            tips on navigating regulations, ensuring quality, and working with a
            trusted partner like D and R Goldenwing International Trading
            Company Ltd.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            The Role of Logistics in International Trade
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Understand the complexities of tax regulations in China. Learn how
            expert tax consultation can help you navigate these complexities and
            optimize your financial planning.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Enhancing Your Business with E-commerce Solutions
          </span>
          <br></br>
          <span className="blog-content-sub-text ">
            Explore how our event management services can support your corporate
            and personal events. Learn about the latest trends and how to plan
            and execute successful events.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Navigating China Educational Consultancy for Student Success
          </span>
          <br></br> <br></br>
          <span className="blog-content-sub-text ">
            Find guidance and support for students seeking educational
            opportunities in China. Learn about the benefits of our educational
            consultancy services and how we can assist you in finding the right
            educational path.
          </span>{" "}
          <br></br> <br></br>
          <span className="blog-content-sub-head ">
            Maximizing Benefits with China Business Consultancy
          </span>
          <br></br> <br></br>
          <span className="blog-content-sub-text ">
            Explore how our business consultancy services can help you navigate
            the complexities of the Chinese market. Learn about strategic
            planning, market entry, and how to grow your business in China.
          </span>
        </div>
      </section>
      <HomeContact />

      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default Blog;
