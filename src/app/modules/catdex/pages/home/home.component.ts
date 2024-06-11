import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { ListComponent } from '../../components/list/list.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ListComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
