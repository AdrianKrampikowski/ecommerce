import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe,
    MatExpansionModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebars: any[] = [
    {
      img: 'home',
      name: 'Home',
    },
    {
      img: 'local_shipping',
      name: 'Orders',
    },
    {
      img: 'store',
      name: 'Collections',
    },
    {
      img: 'store',
      name: 'Sub Collections',
    },
    {
      img: 'store',
      name: 'Products',
      // subItems: [
      //   { name: 'Electronics' },
      //   { name: 'Apparel' },
      //   { name: 'Books' },
      // ],
    },
    {
      img: 'people',
      name: 'Customers',
    },
    {
      img: 'local_offer',
      name: 'Discounts',
    },
  ];
}
