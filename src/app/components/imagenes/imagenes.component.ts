import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css'],
  providers: [NgbCarouselConfig]
})
export class ImagenesComponent implements OnInit {

  images = ["", 2, 3, 4, 5].map((n) => `../../../assets/img/maraton${n}.jpeg`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
  }

  ngOnInit(): void {
  }

}
