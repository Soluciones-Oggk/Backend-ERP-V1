import { Request } from "express";
import { InfobrasService } from "../../services/integrations/Infobras.service.js";
import { ControllerResponse } from "../../types/app.js";


export class InfobrasController {


    /**
     * Obtiene información de obras desde INFObras.
     */
    static async getInfobras(
        req: Request
    ): Promise<ControllerResponse<any>> {

        try {

            const result =
                await InfobrasService.getInfobras(req);

            return result;


        } catch (error) {

            console.error(
                `[InfobrasController][getInfobras] Error:`,
                error
            );


            return {
                success: false,
                code: 500,
                error: {
                    msg: "Error interno del servidor al recuperar obras de INFObras"
                }
            };

        }

    }

}