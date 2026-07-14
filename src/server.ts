import { AppServer } from "./app";
import { envs } from "./config/envs";

export class Server {

    public static start(): void {

        const appServer = new AppServer();

        const app = appServer.getApp();

        app.listen(envs.PORT, () => {

            console.clear();

            console.log("==================================");
            console.log("🚀 Backend ERP iniciado");
            console.log(`🌐 http://localhost:${envs.PORT}`);
            console.log("==================================");

        });

    }

}