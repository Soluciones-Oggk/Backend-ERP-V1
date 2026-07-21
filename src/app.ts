import express, { type Express } from "express";
import cors from "cors";

import { RootRouter } from "./routes/RootRouter.js";


export class AppServer {

    private readonly app: Express;


    constructor() {

        this.app = express();

        this.middlewares();
        this.routes();

    }


    private middlewares(): void {

        this.app.use(
            cors()
        );

        this.app.use(
            express.json()
        );

        this.app.use(
            express.urlencoded({
                extended: true
            })
        );

    }


    private routes(): void {

        this.app.use(
            RootRouter.getRouter()
        );

    }


    public getApp(): Express {

        return this.app;

    }

}