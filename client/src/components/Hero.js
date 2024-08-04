// src/components/Hero.js
const Hero = () => (
  <section id="hero" className="h-screen flex items-center bg-gray-100">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full">
      <div className="text-center md:text-left text-black md:w-1/2">
        <h1 className="text-5xl font-bold mb-6">Bienvenido a Mi Portafolio</h1>
        <p className="text-xl mb-6">Soy Pedro Cuevas Lavin, un desarrollador web apasionado por crear experiencias digitales increíbles.</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contáctame
          </a>
          <a href="/path-to-your-cv.pdf" download className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Descargar CV
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="/images/herojs_icon.png" // Reemplaza con la ruta a tu imagen
          alt="Hero Image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;



  
  