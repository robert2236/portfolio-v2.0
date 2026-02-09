import About from "./Components/About";
import Header from "./Components/Header";
import HomeComponent from "./Components/Home"; 
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Waves from "./Components/Waves";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"

export default function Page() { 
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <Header/>
      <HomeComponent/> 
      <Waves/>
      <About/>
      <Skills/>
      <Portfolio/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}