export class Expediente {
  Id_exp?: any;
  fuente: string;
  nic: string;
  nuc: string;
  no_folio: string;
  referencia: string;
  folio: string;
  fechacap: string;
  file: File;

  constructor(Id_exp: any | null, fuente: string, nic: string, nuc: string, no_folio: string,
    referencia: string, folio: string, fechacap: string, file: File) {
    this.Id_exp = Id_exp;
    this.fuente = fuente;
    this.nic = nic;
    this.nuc = nuc;
    this.no_folio = no_folio;
    this.referencia = referencia;
    this.folio = folio;
    this.fechacap = fechacap;
    this.file = file;
  }
}







