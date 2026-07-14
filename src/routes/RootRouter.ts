import { Router } from "express";
import { InfobrasRouter } from "../routes/infobras.router.js";

export class RootRouter {

    private static router: Router;

    public static getRouter(): Router {

        if (!RootRouter.router) {

            RootRouter.router = Router();

            const api = "/api/v1";

            // Health Check
            RootRouter.router.get("/", (_, res) => {
                res.json({
                    success: true,
                    message: "Backend ERP API",
                    version: "1.0.0"
                });
            });


            // Módulos
            RootRouter.router.use(
                `${api}/infobras`,
                InfobrasRouter.getRouter()
            );

            // RootRouter.router.use(`${api}/auth`, AuthRouter.getRouter());
            // RootRouter.router.use(`${api}/users`, UserRouter.getRouter());
            // RootRouter.router.use(`${api}/companies`, CompanyRouter.getRouter());
            // RootRouter.router.use(`${api}/branches`, BranchRouter.getRouter());

        }

        return RootRouter.router;

    }

}