// src/components/Projects.js
const Projects = () => (
    <section id="projects" className="py-20 bg-white" >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/proyectoLanding_icon.png" alt="Proyecto" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">Landing de Ventas</h3>
            <p className="text-gray-700 mb-4">HTML-CSS</p>
            <div className="flex justify-between">
              <a href="https://faofaofao.github.io/Proyecto1Landing/" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">DEMO</a>
              <a href="https://github.com/faofaofao/Proyecto1Landing?tab=readme-ov-file" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">REPO</a>
            </div>
          
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/proyectoCrud_icon.png" alt="Proyecto" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">CRUD</h3>
            <p className="text-gray-700 mb-4">HTML-CSS-JS</p>
            <div className="flex justify-between">
              <a href="https://faofaofao.github.io/Proyecto2CRUD/" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">DEMO</a>
              <a href="https://github.com/faofaofao/Proyecto2CRUD?tab=readme-ov-file" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">REPO</a>
            </div>
          
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/proyectoDashboard_icon.png" alt="Proyecto" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">DASHBOARD</h3>
            <p className="text-gray-700 mb-4">HTML-CSS-JS-NODEJS</p>
            <div className="flex justify-between">
              <a href="https://faofaofao.github.io/Dashboard_03/" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">DEMO</a>
              <a href="https://github.com/faofaofao/Dashboard_03" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">REPO</a>
            </div>
          
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/proyectoRestauranteAPP_icon.png" alt="Proyecto" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">RestauranteAPP</h3>
            <p className="text-gray-700 mb-4">HTML-CSS-TAILWIND-JS-NODEJS-EXPRESSJS-REACT-VITE-FIREBASE</p>
            <div className="flex justify-between">
              <a href="https://proyecto-restaurant-app-six.vercel.app/" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">DEMO</a>
              <a href="https://github.com/faofaofao/Proyecto_rastaurante_APP" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">REPO</a>
            </div>
          
          </div>
          {/* Repite estas cartas según sea necesario */}
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  
  