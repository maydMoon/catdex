import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 3 },
      },
    });
  }
}
