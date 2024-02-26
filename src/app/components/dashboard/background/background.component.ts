import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  images = [
    { path: 'https://r3.whistleout.com.mx/public/images/articles/2017/06/naucalpan.jpg'},
    { path: 'https://mxcity.mx/wp-content/uploads/2020/06/naucalpan-1-e1591261804613.jpg'},
    { path: 'https://cdn-3.expansion.mx/dims4/default/ca01057/2147483647/strip/true/crop/6165x4110+0+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F34%2F37%2Fbfd24e6e44e5ab109d02061cc240%2Fistock-1190725276.jpg'},
    { path: 'https://lh5.googleusercontent.com/p/AF1QipMdoEnlevCENe_vS-6nax9XjxlEQAnchQISTJr7=w548-h318-n-k-no'},
    { path: 'https://monitorfinanciero.com.mx/wp-content/uploads/2022/12/Palacio-Naucalpan.jpg'},
    { path: 'https://lh5.googleusercontent.com/p/AF1QipN-CkbbTv9D9QFiRC4Q7bM0t2VTngGTXPXjzp-T=w548-h318-n-k-no'},
    { path: 'https://s3.amazonaws.com/rytvmx/wpmedia/2020/11/16171028/WhatsApp-Image-2020-11-16-at-16.52.21-822x463.jpeg'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
