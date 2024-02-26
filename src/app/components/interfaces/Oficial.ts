export class Oficial {
  OFICIAL?: any
  NOMBRE_OFICIAL: string
  DEPENDENCIA: string
  INSTITUCION: string
  DETENIDO: string
  HECHOS: string



  constructor(OFICIAL: any | null, NOMBRE_OFICIAL: string, DEPENDENCIA: string,
    INSTITUCION: string, DETENIDO: string, HECHOS: string) {
    this.OFICIAL = OFICIAL;
    this.NOMBRE_OFICIAL = NOMBRE_OFICIAL;
    this.DEPENDENCIA = DEPENDENCIA;
    this.INSTITUCION = INSTITUCION;
    this.DETENIDO = DETENIDO;
    this.HECHOS = HECHOS;


  }
}

export interface OficialI {
  OFICIAL?: any;
  NOMBRE_OFICIAL: string;
  DEPENDENCIA: string;
  INSTITUCION: string;
  DETENIDO: string;
  HECHOS: string;

}
