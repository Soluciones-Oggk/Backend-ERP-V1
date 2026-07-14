import express, { type Express } from "express";
import cors from "cors";
import { RootRouter } from "./routes/RootRouter.js";
import { envs } from "./config/envs.js";

export class AppServer {

    private readonly app: Express;

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    private middlewares(): void {

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.urlencoded({ extended: true }));

    }

  private routes(): void {

    this.app.use(
        RootRouter.getRouter()
    );

}

    public listen(): void {

        this.app.listen(envs.PORT, () => {

            console.log(`
==================================
🚀 Backend ERP iniciado
🌐 http://localhost:${envs.PORT}
==================================
            `);

        });

    }

    public getApp(): Express {
    return this.app;
}

}