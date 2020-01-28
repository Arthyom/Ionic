import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapdetails',
  templateUrl: './mapdetails.page.html',
  styleUrls: ['./mapdetails.page.scss'],
})
export class MapdetailsPage implements OnInit, AfterViewInit {

  

  lat: number;
  lng: number;
  

  constructor( private router: ActivatedRoute ) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.lat = Number( this.router.snapshot.paramMap.get('geo').substr(1).split(',')[0]);
    this.lng = Number( this.router.snapshot.paramMap.get('geo').substr(1).split(',')[1]);

    mapboxgl.accessToken = 'pk.eyJ1Ijoid2ZscyIsImEiOiJjazV3NmRqb2Yxcng3M2VtcW5jbW5tMWtzIn0.weasBvSAgioQbERU_lj_wg';

    console.log('lat, log', this.lat, this.lng)
    let map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', () => {
      map.resize();

      new mapboxgl.Marker()
      .setLngLat( [this.lng, this.lat] )
      .addTo(map);

      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
      }
      }

      map.addLayer(
      {
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
      'fill-extrusion-color': '#aaa',
       
      // use an 'interpolate' expression to add a smooth transition effect to the
      // buildings as the user zooms in
      'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height']
      ],
      'fill-extrusion-base': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.6
      }
      },
      labelLayerId
      );
      });

 
    
  }
}
