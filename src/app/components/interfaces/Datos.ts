export class Datos {
  id_DATOS?: any
  ZONA: string
  COLONIA: string
  CALLE_1: string
  CALLE_O_REFERENCIA: string
  MOTIVO_DE_LA_DETENCION: string
  COORDENADA_Y_LATITUD: string
  COORDENADA_X_LONGITUD: string

  constructor(id_DATOS: any | null,  ZONA: string, COLONIA: string, CALLE_1: string,
    CALLE_O_REFERENCIA: string, MOTIVO_DE_LA_DETENCION: string, COORDENADA_Y_LATITUD: string,COORDENADA_X_LONGITUD:string) {
    this.id_DATOS = id_DATOS
    this.ZONA = ZONA
    this.COLONIA = COLONIA
    this.CALLE_1 = CALLE_1
    this.CALLE_O_REFERENCIA = CALLE_O_REFERENCIA
    this.MOTIVO_DE_LA_DETENCION = MOTIVO_DE_LA_DETENCION
    this.COORDENADA_Y_LATITUD = COORDENADA_Y_LATITUD
    this.COORDENADA_X_LONGITUD = COORDENADA_X_LONGITUD

  }
}

export interface DatosI {
  id_DATOS?: any;
  ZONA: string;
  FECHA_HORA: string;
  COLONIA: string;
  CALLE_1: string;
  CALLE_O_REFERENCIA: string;
  MOTIVO_DE_LA_DETENCION: string;
  COORDENADA_Y_LATITUD: string;
  COORDENADA_X_LONGITUD: string;

}
