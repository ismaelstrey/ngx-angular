import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {


  constructor() { }
  title = 'My first AGM project';
  lat = -29.570041;
  lng = -50.792810;
  icon = './assets/img/icons/fast_food.png';
  zoom = 14;

  markers: Marker[] = [
    {
      lat: -29.575241,
      lng: -50.795510,
      label: '',
      draggable: false,
      title: 'Xis do Vini',
      iconUrl: this.icon

    },
    {
      lat: -29.504200,
      lng: -50.794510,
      label: '',
      draggable: false,
      title: 'Xis do alemao',
      iconUrl: this.icon

    },
    {
      lat: -29.570070,
      lng: -50.792900,
      label: '',
      draggable: false,
      title: 'Xis do Vine',
      iconUrl: this.icon

    }
  ];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  ngOnInit() {
  }

}
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title?: string;
  iconUrl?: string;
}
