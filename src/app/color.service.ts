import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private color$ = new Subject<string>();

  alterarCor(cor: string) {
    this.color$.next(cor);
  }
  getValor() {
    return this.color$.asObservable();
  }

  constructor() {

  }
}
