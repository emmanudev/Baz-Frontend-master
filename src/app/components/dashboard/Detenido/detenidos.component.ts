import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DetenidosService } from 'src/app/services/detenido/detenido.service';

@Component({
  selector: 'app-detenidos',
  templateUrl: './detenidos.component.html',
  styleUrls: ['./detenidos.component.css']
})
export class DetenidosComponent implements OnInit {
  

    panelOpenState: boolean = false;
    formExpediente: FormGroup | any;
    loading: boolean = false;
  FormUploadFile: any;
  
    constructor(private detenidoService : DetenidosService) { }
  
  
    ngOnInit(): void {
    }
  
    createLimits(){
      const file = this.FormUploadFile.value.file;
      console.log(file);
      const reader : FileReader = new FileReader();
  
      reader.onload = (any) => {
        const bstr : string = file.name; 
        console.log(bstr);
        
        
      };
  
      reader.readAsBinaryString(file);
    }
   

}
