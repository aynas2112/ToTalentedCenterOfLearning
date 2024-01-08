import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SearchBar from "../src/components/SearchBar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Courses from "../src/components/Courses";
import Blog from "./components/Blogs";
import Testimonial from "../src/components/Testimonial";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <SearchBar />
      </div>
      <Hero />
      <About />
      <Courses />
      <Blog />
      <Testimonial />
      <div>
      <Contact />
      </div>
      <div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
