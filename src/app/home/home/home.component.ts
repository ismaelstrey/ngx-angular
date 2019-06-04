import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { randomColor } from 'randomcolor';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  cor = '';
  constructor() { }

  trocaCor() {
    this.cor = randomColor();
    localStorage.setItem('color', this.cor);
  }

  ngOnInit() {

  }

}
