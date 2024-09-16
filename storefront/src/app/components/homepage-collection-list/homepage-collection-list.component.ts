import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage-collection-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage-collection-list.component.html',
  styleUrl: './homepage-collection-list.component.scss',
})
export class HomepageCollectionListComponent {
  images: string[] = [
    '../../../assets/img/Image20240911163322.png',
    '../../../assets/img/Image20240911164557.png',
  ];
}
