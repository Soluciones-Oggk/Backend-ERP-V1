import { AppServer } from "./app.js";
import { envs } from "./config/envs.js";

export class Server {

    public static start(): void {

        const appServer = new AppServer();

        const app = appServer.getApp();

        app.listen(
            envs.PORT,
            "0.0.0.0",
            () => {

                console.log("==================================");
                console.log("🚀 Backend ERP iniciado");
                console.log(`🌐 http://localhost:${envs.PORT}`);
                console.log(`📡 Puerto: ${envs.PORT}`);
                console.log("==================================");

            }
        );

    }

}