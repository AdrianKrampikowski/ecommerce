import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})



export class ProductListComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    {
      quader: 'quader',
      product: {
        img: '../../../../assets/img/testImg.png',
        name: 'product',
      },
      status: 'status',
      sales_channel: 'sales_channel',
      markets: 'markets',
      category: 'category',
      type: 'type',
      vendor: 'vendor',
    },
  ];
  displayedColumns: string[] = [
    'quader',
    'product',
    'status',
    'sales_channel',
    'markets',
    'category',
    'type',
    'vendor',
  ];
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.ELEMENT_DATA;
  }
}
