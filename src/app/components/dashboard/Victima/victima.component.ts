import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VictimaService } from 'src/app/services/victima/victima.service';
@Component({
  selector: 'app-victima',
  templateUrl: './victima.component.html',
  styleUrls: ['./victima.component.css']
})
export class VictimaComponent implements OnInit {

  panelOpenState: boolean = false;
  formExpediente: FormGroup | any;
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
