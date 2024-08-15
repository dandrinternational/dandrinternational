import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import Preloader from "./Preloader/Preloader";
import MainAbout from "./MainAbout/MainAbout";
import MainServices from "./MainServices/MainServices";
import MainBrochure from "./MainBrochure/MainBrochure";
import Blog from "./Blog/Blog";
import BlogDetail from "./Blog/BlogDetail";

function App() {
  useEffect(() => {}, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<MainAbout />} />
            <Route path="/services" element={<MainServices />} />
            <Route path="/brochure" element={<MainBrochure />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
