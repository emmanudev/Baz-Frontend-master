import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

}
