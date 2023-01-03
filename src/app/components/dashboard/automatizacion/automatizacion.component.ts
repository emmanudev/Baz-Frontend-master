import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-automatizacion',
  templateUrl: './automatizacion.component.html',
  styleUrls: ['./automatizacion.component.css']
})
export class AutomatizacionComponent implements OnInit {

  panelOpenState: boolean = false;
  FormUploadFile: FormGroup;
  loading: boolean = false;


  constructor(private fb: FormBuilder,) {

    this.FormUploadFile = this.fb.group({
      file: ['', Validators.required],
    });

  }

  ngOnInit(): void {

  }


  createLimits(){
    const file = this.FormUploadFile.value.file;
    console.log(file);
    const reader : FileReader = new FileReader();

    reader.onload = (any) => {
      const bstr : string = file.name; 
      console.log(bstr);
      const wb : XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      console.log(wb);
      const wsName : string = wb.SheetNames[0];
      console.log(wsName);

      const ws : XLSX.WorkSheet = wb.Sheets[wsName];

      console.log(ws);
      
      
    };

    reader.readAsBinaryString(file);
  }
}
