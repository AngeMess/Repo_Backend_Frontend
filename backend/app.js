// Importo todo lo de la libreria express
import express from "express"

// Creo una constante que es igual a la libreria que importè y la ejecuta
const app = express();

// Definir la ruta
app.use("/api/products")

// Exporto la constante para poder usar express en otros lados
export default app;