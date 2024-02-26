export class Expediente {
  id?: any
  Numero_de_Folio:string;
  Nombre_del_Primer_Respondiente: string;
  Folio_Plataforma: string;
  Folio_RND: string;
  Turno: string;
  Entrega_de_Remitidos: string;
  Total_de_Remitidos: string;


  constructor(id: any | null, Numero_de_Folio: string,Nombre_del_Primer_Respondiente: string, Folio_Plataforma: string, Folio_RND: string,
    Turno: string, Entrega_de_Remitidos: string,  Total_de_Remitidos: string) {
    this.id = id;
    this.Numero_de_Folio=Numero_de_Folio;
    this.Nombre_del_Primer_Respondiente = Nombre_del_Primer_Respondiente;
    this.Folio_Plataforma = Folio_Plataforma;
    this.Folio_RND = Folio_RND;
    this.Turno = Turno;
    this.Entrega_de_Remitidos = Entrega_de_Remitidos;
    this.Total_de_Remitidos = Total_de_Remitidos;

  }
}

export interface ExpedienteI {
  id? : any;
  Numero_de_Folio:string;
  Nombre_del_Primer_Respondiente: string;
  Folio_Plataforma: string;
  Folio_RND: string;
  Turno: string;
  Entrega_de_Remitidos: string;
  Total_de_Remitidos: string;
}





