import { Component } from '@angular/core';
import { HomepageCollectionListComponent } from '../homepage-collection-list/homepage-collection-list.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HomepageCollectionListComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {}
