export class Detenidos {
    id_REMITIDOS?: number;
  NOMBRE: string;
  APELLIDO_PATERNO: string;
  APELLIDO_MATERNO: string;
  EDAD: string;
  ORIGINARIO: string;
  FECHA_NACIMIENTO: string;
  NOMBRE_DEL_PADRE: string;
  NOMBRE_DE_LA_MADRE: string;
  DOMICILIO: string;
  IMAGEN: string;
  SEXO: string;



  constructor(id_REMITIDOS: number, NOMBRE: string, APELLIDO_PATERNO: string, APELLIDO_MATERNO: string, EDAD: string, ORIGINARIO: string, FECHA_NACIMIENTO: string, NOMBRE_DEL_PADRE: string, NOMBRE_DE_LA_MADRE: string, DOMICILIO: string,
    IMAGEN: string, SEXO: string) {
      this.id_REMITIDOS = id_REMITIDOS;
      this.NOMBRE = NOMBRE;
      this.APELLIDO_PATERNO = APELLIDO_PATERNO;
      this.APELLIDO_MATERNO = APELLIDO_MATERNO;
      this.EDAD = EDAD;
      this.ORIGINARIO = ORIGINARIO;
      this.FECHA_NACIMIENTO = FECHA_NACIMIENTO;
      this.NOMBRE_DEL_PADRE = NOMBRE_DEL_PADRE;
      this.NOMBRE_DE_LA_MADRE = NOMBRE_DE_LA_MADRE;
      this.DOMICILIO = DOMICILIO;
      this.IMAGEN = IMAGEN;
      this.SEXO = SEXO;
      }
}

export interface DetenidosI {
  id_REMITIDOS: number;
  NOMBRE: string;
  APELLIDO_PATERNO: string;
  APELLIDO_MATERNO: string;
  EDAD: string;
  ORIGINARIO: string;
  FECHA_NACIMIENTO: string;
  NOMBRE_DEL_PADRE: string;
  NOMBRE_DE_LA_MADRE: string;
  DOMICILIO: string;
  IMAGEN: string;
  SEXO: string;
  
}
