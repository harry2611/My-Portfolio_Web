import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export function meta() {
  return [
    { title: "Harsh Zele - Full Stack Developer" },
    { name: "description", content: "Portfolio of Harsh Zele - Full Stack Developer passionate about creating beautiful, functional web experiences." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
