const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Ruta para manejar las solicitudes POST para enviar un mensaje de contacto
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Guardar el mensaje en la base de datos
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Configuración de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Opciones para el correo a ser enviado al administrador
    const mailOptionsToYou = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    };

    // Opciones para el correo de confirmación al usuario
    const mailOptionsToUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Copia de tu mensaje de contacto: ${subject}`,
      text: `Hola ${name},\n\nHemos recibido tu mensaje y nos pondremos en contacto contigo pronto. Aquí tienes una copia de tu mensaje:\n\n${message}\n\nSaludos,\nEquipo de Soporte`,
    };

    // Enviar correos electrónicos
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToUser);

    // Enviar respuesta exitosa
    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' });
  }
});

module.exports = router;
