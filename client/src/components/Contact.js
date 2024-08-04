// client/components/Contact.js
import { useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("APIURL", apiUrl)
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      console.log(response.data);
      // Reset form and error message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrorMessage('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrorMessage('El correo no existe');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Contáctame</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Enviar</button>
          </div>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};



export default Contact;
