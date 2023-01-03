import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images = [
    { path: 'https://cdn-3.expansion.mx/45/f3/b13d11724cedbbfd403c6c28db45/xpa-web-banco-bancoazteca-ja028.jpg'},
    { path: 'https://cdn-3.expansion.mx/45/f3/b13d11724cedbbfd403c6c28db45/xpa-web-banco-bancoazteca-ja028.jpg'},
    { path: 'https://cdn-3.expansion.mx/45/f3/b13d11724cedbbfd403c6c28db45/xpa-web-banco-bancoazteca-ja028.jpg'},
    { path: 'https://cdn-3.expansion.mx/45/f3/b13d11724cedbbfd403c6c28db45/xpa-web-banco-bancoazteca-ja028.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
}
