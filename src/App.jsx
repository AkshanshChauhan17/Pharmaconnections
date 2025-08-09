import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import TopSlidingText from "./Components/TopSlidingText";
import TopStrip from "./Components/TopStrip";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <TopSlidingText />
      <TopStrip />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
