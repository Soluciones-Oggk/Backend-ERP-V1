import { Router, Request, Response } from "express";
import { InfobrasController } from "../controllers/integrations";
import { ControllerResponse } from "../types/app";


export class InfobrasRouter {

    private static instance: InfobrasRouter;
    private router: Router;


    private constructor() {

        this.router = Router();

        this.initializeRoutes();

    }


    static getRouter(): Router {

        if (!InfobrasRouter.instance) {

            InfobrasRouter.instance = new InfobrasRouter();

        }

        return InfobrasRouter.instance.router;

    }


    private initializeRoutes() {

        this.router.get(
            "/get",
            this.getInfobras
        );

    }


    private getInfobras = async (
        req: Request,
        res: Response
    ) => {

        const response =
            await InfobrasController.getInfobras(req);


        return this.sendResponse(
            res,
            response
        );

    };


    /**
     * Método estandarizado para enviar respuesta HTTP.
     */
    private sendResponse(
        res: Response,
        response: ControllerResponse<any>
    ) {

        if (res.headersSent) return;


        return res
            .status(response.code)
            .json(response);

    }


}