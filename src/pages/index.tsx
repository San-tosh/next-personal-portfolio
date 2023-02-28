import Hero from "../../components/UI/Hero/Hero";
import Services from "../../components/UI/Services/Services";
import About from "../../components/UI/About/About";
import Portfolio from "../../components/UI/Portfolio/Portfolio";
import Contact from "../../components/UI/Contact/Contact";

export default function Home() {
  return (
   <>
       <Hero/>
       <Services/>
       <About/>
       <Portfolio/>
       <Contact/>
   </>
  )
}
