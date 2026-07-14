export interface ObraResponse {
  Parameters: Parameters;
  Code: number;
  Description: string;
  ErrorDescription: string | null;
  Result: Obra[];
}

export interface Parameters {
  records: string;
  page: string;
  rowsPerPage: string;
}

export interface Obra {
  Estado: string;
  NombreObra: string;
  CUI: string;
  SNIP: string | null;
  Ubicacion: string | null;
  Codigo: number;
  Desde: number | null;
  Hasta: number | null;
  Minimo: number | null;
  Maximo: number | null;
  Nivel1: number | null;
  Nivel2: number | null;
  Nivel3: number | null;
  ControlSocial: string | null;
  ControlGubernamental: string | null;
  TipoControl: string | null;
  Marca: string | null;
  FechaInicioEjecucion: string | null;
  FechaFinalizacion: string | null;
  Monto: number | null;
  AvanceFisico: number | null;
  Contratista: string | null;
  Imagen: string | null;
  Validar: string;
  Departamento: string | null;
  Provincia: string | null;
  Distrito: string | null;
  EntidadNombre: string | null;
  ModalidadEjecucion: string | null;
}