// src/components/Education.js
const Education = () => (
    <section id="education" className="py-20 bg-white" >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Formación</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/udd_icon.png" alt="Institución" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">Desarrollo web FullStack Universidad del Desarrollo</h3>
            <p className="text-gray-700">11-2023 - 08-2024</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/udemy_logo.png" alt="Institución" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">JavaScript & NODEJS - 
            Udemy</h3>
            <p className="text-gray-700">03-2023 - 07-2023</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/desafioLatam_logo.png" alt="Institución" className="h-50 w-full object-cover mb-4 rounded-md"/>
            <h3 className="text-xl font-bold mb-2">JavaScript FullStack - 
            Desafio Latam</h3>
            <p className="text-gray-700">03-2023 - 07-2023</p>
          </div>
          {/* Repite estas cartas según sea necesario */}
        </div>
      </div>
    </section>
  );
  
export default Education;
  