// src/components/Header.js
const Header = () => (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Mi Portafolio</div>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:underline">Inicio</a></li>
          <li><a href="#about" className="hover:underline">Sobre mí</a></li>
          <li><a href="#education" className="hover:underline">Formación</a></li>
          <li><a href="#skills" className="hover:underline">Habilidades</a></li>
          <li><a href="#projects" className="hover:underline">Proyectos</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  
