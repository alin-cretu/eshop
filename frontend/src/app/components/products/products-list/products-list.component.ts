import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IProducts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getProducts()
      .subscribe((products: IProducts[]) => (this.products = products));
  }
}
