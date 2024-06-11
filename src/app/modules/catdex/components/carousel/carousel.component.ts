import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  cats = [
    { image: 'assets/icons/search.svg' },
    { image: 'assets/icons/paw.svg' },
    { image: 'assets/icons/link.svg' },
    { image: 'assets/icons/cat.svg' },
  ];
}
