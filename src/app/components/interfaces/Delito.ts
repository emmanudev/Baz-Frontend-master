export class Delito {
Id_delito?: any;
Tipo_Delito: string;
Subtipo: string;
Modalidad: string;


  constructor(Id_delito: any | null, Tipo_Delito: string, Subtipo: string, Modalidad: string) {
    this.Id_delito = Id_delito;
    this.Tipo_Delito = Tipo_Delito;
    this.Subtipo = Subtipo;
    this.Modalidad = Modalidad;
  }
}

export interface DelitoI {
  Id_delito?: any;
  Tipo_Delito: string;
  Subtipo: string;
  Modalidad: string;
  fecha?: string;
}
