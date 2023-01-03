import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delitos',
  templateUrl: './delitos.component.html',
  styleUrls: ['./delitos.component.css']
})
export class DelitosComponent implements OnInit {
  FormUploadFile: FormGroup;;
  
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
     
      
      
    };

    reader.readAsBinaryString(file);
  }
}
