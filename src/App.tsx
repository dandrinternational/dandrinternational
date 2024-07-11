import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import Preloader from "./Preloader/Preloader";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);
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
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
