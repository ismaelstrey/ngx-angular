import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // color = this.color = localStorage.getItem('color');
  color = '';
  corStorage = localStorage.getItem('color');
  modalRef: 'BsModalRef';
  constructor() {
    if (!this.corStorage) {
      this.color = '#563d7c';
    } else {
      this.color = this.corStorage;
    }
  }


  ngOnInit() {
  }

}
