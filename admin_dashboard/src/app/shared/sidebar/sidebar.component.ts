import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    DatePipe,
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
      img: 'home',
      name: 'Orders',
    },
    {
      img: 'home',
      name: 'Prodcuts',
    },
    {
      img: 'home',
      name: 'Sub Collection',
    },
    {
      img: 'home',
      name: 'Customers',
    },
    {
      img: 'home',
      name: 'Discounts',
    },
  ];
}
