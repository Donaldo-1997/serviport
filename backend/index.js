const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// Routes
const ordenes = require('./routes/api/ordenes');
const puertos = require('./routes/api/puertos');

const app = express();

// Conexion con la base de datos
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('serviport listo'));

// use routes
app.use('/api/ordenes', ordenes);
app.use('/api/puertos', puertos);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));