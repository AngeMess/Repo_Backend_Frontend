import mongoose from "mongoose"

// Guardo en una cosntante la dirección de mi base de datos
const URI = "mongodb://localhost:27017/cocacolaDB"

// Conectar la base de datos
mongoose.connect(URI)

// ------ Comprobación que la base sirve

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected");
});

connection.on("disconnected", () => {
    console.log("DB is disconnected");
});

connection.on("error", (error) => {
    cibsike.log("Error found" + error);
});








