import express from "express"; // Importamos la dependencia
import cors from "cors";
import fisicaRoutes from "./routes/fisica.routes.js";

const app = express(); // Asignamos la dependencia a una constante
const port = 5000; // Indicamos el puerto

app.use(cors()); // Habilitamos CORS
app.use(express.json()); // Vamos a trabajar con formato json


app.use("/fisica", fisicaRoutes);

app.listen(port, () => {
  console.log(`La aplicacion esta corriendo en el puerto ${port}`); // Le indicamos al servidor por que puerto va a salir
});