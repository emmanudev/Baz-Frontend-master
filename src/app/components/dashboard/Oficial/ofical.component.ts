import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ObjetosService } from 'src/app/services/objetos/objetos.service';

@Component({
  selector: 'app-ofical',
  templateUrl: './ofical.component.html',
  styleUrls: ['./ofical.component.css']
})
export class OficalComponent implements OnInit {

  panelOpenState: boolean = false;
  formExpediente: FormGroup | any;
  loading: boolean = false;
  constructor(private objetosService: ObjetosService) { }

  ngOnInit(): void {
  }
  crearExpedinete(){

  }

}
