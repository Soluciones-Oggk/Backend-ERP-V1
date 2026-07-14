import axios from "axios";
import { Request } from "express";


export class InfobrasService {


    private static readonly url =
        "https://infobras.contraloria.gob.pe/InfobrasWeb/Mapa/MapaEstadistico/BusquedaAvanzada";


    static async getInfobras(req: Request) {

        try {

            const response = await axios.get(
                this.url,
                {
                    params: {

                        nombre: req.query.nombre ?? "",
                        codigo: req.query.codigo ?? "",
                        valor: req.query.valor ?? "",

                        desde: req.query.desde ?? "",
                        hasta: req.query.hasta ?? "",

                        minimo: req.query.minimo ?? "",
                        maximo: req.query.maximo ?? "",

                        nivel1: req.query.nivel1 ?? "",
                        nivel2: req.query.nivel2 ?? "",
                        nivel3: req.query.nivel3 ?? "",

                        controlSocial:
                            req.query.controlSocial ?? "",

                        controlGubernamental:
                            req.query.controlGubernamental ?? "",

                        tipoControl:
                            req.query.tipoControl ?? "",

                        marca:
                            req.query.marca ?? "",

                        departamento:
                            req.query.departamento ?? "",

                        provincia:
                            req.query.provincia ?? "",

                        distrito:
                            req.query.distrito ?? "",

                        estado:
                            req.query.estado ?? "",

                        modalidadEjecucion:
                            req.query.modalidadEjecucion ?? "",

                        orderBy:
                            req.query.orderBy ?? "en_ejecucion",

                        pageNumber:
                            req.query.pageNumber ?? 1,

                        pageSize:
                            req.query.pageSize ?? 20
                    }
                }
            );


            return {
                success: true,
                code: 200,
                res: response.data
            };


        } catch (error) {

           if (axios.isAxiosError(error)) {
        console.error("========== INFOBRAS ERROR ==========");
        console.error("Message:", error.message);
        console.error("Status:", error.response?.status);
        console.error("Headers:", error.response?.headers);
        console.error("Data:", error.response?.data);
    } else {
        console.error(error);
    }

    return {
        success: false,
        code: 500,
        error: {
            msg: "Error al recuperar obras de INFObras"
        }

        }
    }

    }

}