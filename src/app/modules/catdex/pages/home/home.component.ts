import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
