import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObjetosService } from 'src/app/services/objetos/objetos.service';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  panelOpenState: boolean = false;
  formExpediente: FormGroup | any;
  loading: boolean = false;
  
  constructor(private objetosService: ObjetosService) { }

  ngOnInit(): void {
  }

}
