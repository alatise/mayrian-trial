import Article from "./components/article";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Services from "./components/services";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero />
        <Article />
        <Services />
        <hr className="my-10" />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
