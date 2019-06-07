import { Injectable } from '@angular/core';
import { Marker } from './mapas/mapas.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapasService {
 markers: Marker [] = [
    {
      lat: -29.575241,
      lng: -50.795510,
      label: '',
      draggable: false,
      title: 'Esso Provedor de Internet',
      iconUrl: './assets/img/icons/fast_food.png',
      logo: 'http://www.essoprovedor.com.br/wp-content/uploads/2018/10/LOGO10.png',
      fone: '(51)9 8175-4701',
      watsap: '(51)9 8175-4701'

    },
    {
      lat: -29.575241,
      lng: -50.795510,
      label: '',
      draggable: false,
      title: 'Xis do Vini',
      iconUrl: './assets/img/icons/fast_food.png',
      logo: 'http://www.essoprovedor.com.br/wp-content/uploads/2018/10/LOGO10.png',
      fone: '(51)9 8175-4701',
      watsap: '(51)9 8175-4701'

    },
    {
      lat: -29.575241,
      lng: -50.795510,
      label: '',
      draggable: false,
      title: 'Xis do Vini',
      iconUrl: './assets/img/icons/fast_food.png',
      logo: 'http://www.essoprovedor.com.br/wp-content/uploads/2018/10/LOGO10.png',
      fone: '(51)9 8175-4701',
      watsap: '(51)9 8175-4701'

    }
  ];

  constructor() { }

  getMarkers() {
    return this.markers;
  }
}
