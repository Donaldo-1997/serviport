const connectDB = require('./config/db');
// Conexion con la base de datos
connectDB();

require('dotenv').config()
const express = require('express');
var cors = require('cors');


// Routes
const users = require('./routes/api/users');
const ordenes = require('./routes/api/ordenes');
const puertos = require('./routes/api/puertos');
const rutas = require('./routes/api/rutas');
const login = require('./routes/api/login');
const milla = require('./routes/api/milla');

const app = express();


// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('serviport listo'));

// use routes
app.use('/api/users', users);
app.use('/api/login', login);
app.use('/api/ordenes', ordenes);
app.use('/api/puertos', puertos);
app.use('/api/rutas', rutas);
app.use('/api/milla', milla);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));