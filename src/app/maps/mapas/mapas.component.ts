import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Marker } from './mapas.interface';
import { MapasService } from '../mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {


  constructor(private service: MapasService) {
    console.log(this.markers);
  }
  lat = -29.570041;
  lng = -50.792810;
  icon = './assets/img/icons/fast_food.png';
  zoom = 14;
  markers = this.service.markers;
  
  // markers = this.dados.markers;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  ngOnInit() {
  }

}
