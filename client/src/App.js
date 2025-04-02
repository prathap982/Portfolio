import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Footer from "./pages/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <ToastContainer />
    <MobileNav />
    <Layout/>
    <div className="container">
      <About />
      <Education />
      <Techstack />
      <Projects />
      <WorkExp />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
