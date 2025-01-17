/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
<<<<<<< HEAD
// Importar Express
const express = require("express");
const path = require("path"); // Módulo para manejar rutas
const app = express();

// Configuración del motor de vistas EJS
app.set("views", path.join(__dirname, "views")); // Establece el directorio de vistas
app.set("view engine", "ejs"); // Usa EJS como motor de vistas


// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal que renderiza la vista "registro"
app.get("/", function (req, res) {
  res.render("registrar"); // Renderiza el archivo "views/registro.ejs"
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, function () {
  console.log("Servidor corriendo en http://localhost:3000");
});

=======
>>>>>>> 6a369281c36cc44ef673e54f3e27800e17f721f8

