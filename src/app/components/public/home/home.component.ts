import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './../../../../assets/css/shop-homepage.css']
})
export class HomeComponent implements OnInit {

  products: any


  categories: any

  constructor(private categoryservice: CategoryService, private productservice: ProductService) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategorys().subscribe(
      res => { this.categories = res }, error => { console.log(error) })
    this.productservice.getAllProducts().subscribe(
      res => { this.products = res }, error => { console.log(error) })
  }
}
