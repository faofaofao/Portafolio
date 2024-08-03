const About = () => (
  <section id="about" className="py-10 bg-gray-100" data-aos="fade-up"> {/* Cambié py-20 a py-10 */}
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Sobre mí</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="/images/aboutjs_icon.png" 
            alt="Sobre mí"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
          <p className="text-gray-700">
            Soy un desarrollador web con experiencia en tecnologías como HTML, CSS, JavaScript y frameworks modernos como React. 
            Me apasiona crear sitios web interactivos y responsivos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
