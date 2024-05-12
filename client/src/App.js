import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Footer/Footer";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Toaster />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
        <Footer author={"NAND KISHORE"} />
      </div>
    </>
  );
}

export default App;
