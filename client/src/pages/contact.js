// frontend/pages/contact.js

import React, { useState } from 'react';
import { verifyEmail } from '../utils/api';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await verifyEmail(email);
      setMessage(data.message);
    } catch (error) {
      setMessage('Error al verificar el email');
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactPage;
