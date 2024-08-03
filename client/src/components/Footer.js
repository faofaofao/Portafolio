// src/components/Footer.js
const Footer = () => (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/faoenrico/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram_icon.png" alt="Instagram" className="h-6 w-6"/>
          </a>
          <a href="https://www.linkedin.com/in/pedro-alberto-enrico-cuevas-lav%C3%ADn-1645191a1/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin_icon.png" alt="LinkedIn" className="h-6 w-6"/>
          </a>
          <a href="https://github.com/faofaofao" target="_blank" rel="noopener noreferrer">
            <img src="/images/github_icon.png" alt="GitHub" className="h-6 w-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  