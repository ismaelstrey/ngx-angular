import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from 'src/app/color.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  color = '';
  corStorage = localStorage.getItem('color');
  constructor(private service: ColorService) {
    if (!this.corStorage) {
      console.log('existe');
      this.color = '#563d7c';
    } else {
      this.color = this.corStorage;
    }

  }


  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.color, v)))
      .subscribe(novaCor => this.color = novaCor);
  }
  ngOnDestroy() {

    console.log(`${this.color} foi destruido`);
  }

}
