export class Datos {
  Id_datos?: any
  Colonia: string
  Zona: string
  Region: string
  Calle1: string
  Calle2: string
  Numero: string
  Adscripcion: string
  Impacto: string
  Y: string
  X: string

  constructor(Id_datos: any | null, Colonia: string, Zona: string, Region: string, Calle1: string,
    Calle2: string, Numero: string, Adscripcion: string,Impacto:string, Y: string, X: string) {
    this.Id_datos = Id_datos
    this.Colonia = Colonia
    this.Zona = Zona
    this.Region = Region
    this.Calle1 = Calle1
    this.Calle2 = Calle2
    this.Numero = Numero
    this.Adscripcion = Adscripcion
    this.Impacto = Impacto
    this.Y = Y
    this.X = X

  }
}
