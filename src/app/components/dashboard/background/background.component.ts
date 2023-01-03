import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  images = [
    { path: 'C:/Users/pablo/Documents/Angular/Baz-Frontend-master/src/assets/img/grupo_salinas_logo.jpg'},
    { path: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Banco_Azteca.JPG'},
    { path: 'https://usoarquitectura.com.mx/Assets/WeDoContent/Slider/15_e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb.jpg'},
    { path: 'https://cdn-3.expansion.mx/75/fa/2c5aea264a449a2dba47e1444219/xpa-web-bancos-bancoazteca-ja-037.jpg'},
    { path: 'https://cdn.forbes.com.mx/2017/10/Banco-Azteca.jpg'},
    { path: 'https://pbs.twimg.com/media/EqCQDj5WMAMHamn?format=jpg&name=large'},
    { path: 'https://pbs.twimg.com/media/EMQ8R4OWkAAG48T.jpg'},
    { path: 'https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2020/11/26144240/peru%CC%81-banco-azteca.jpg'},
    { path: 'http://www.ricardosalinas.com/blog/images/fotoblognov18.png'},
    { path: 'https://i1.wp.com/pilotzinoticias.com/wp-content/uploads/2018/03/Elektra.jpg?fit=1200%2C661&ssl=1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
