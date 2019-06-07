import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private prod$ = new Subject<string>();

  constructor(produtos: ProdutosService, private authService: AuthService, private http: HttpClient) {


    console.log(authService.apiUrl());
  }


  getProdutos() {
    this.http.get(this.authService.apiUrl());


  }


}
