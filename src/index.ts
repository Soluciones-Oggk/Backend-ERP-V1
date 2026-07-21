import "dotenv/config";

import { Server } from "./server.js";

// Captura errores no controlados
process.on("uncaughtException", (error) => {
    console.error("❌ Error no controlado:");
    console.error(error);
});

process.on("unhandledRejection", (error) => {
    console.error("❌ Promise rechazada:");
    console.error(error);
});

// Iniciar servidor
Server.start();