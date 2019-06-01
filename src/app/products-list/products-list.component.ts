import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Products[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    console.log(this.getProducts());
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getProducts();
  }

}
