import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

token: string;
  constructor(private service: ProdutosService) {
    
   }

  ngOnInit() {
  }

}
