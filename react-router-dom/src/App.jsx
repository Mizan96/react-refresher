import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Nav2 from "./components/Nav2";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <NavBar />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/product" element={<Products />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
