const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
  origin: 'https://portafolio-frontend-b92fhgf1c-pedros-projects-ba5e240c.vercel.app', // Reemplaza con la URL de tu frontend
  optionsSuccessStatus: 200
}));

// Rutas
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


