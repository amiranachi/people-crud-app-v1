import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productslist: any
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(
      res => { this.productslist = res }, error => { console.log(error) })
  }
}
