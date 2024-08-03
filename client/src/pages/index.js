import About from "@/components/About";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Contact from "@/components/Contact"; // Corrige la importación aquí
import Footer from "@/components/Footer"; // Asegúrate de usar la ruta correcta

const Home = () => (
  <div>
    <Head>
      <title>Mi Portafolio</title>
      <meta name="description" content="Portafolio de [Tu Nombre]" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header />
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;



