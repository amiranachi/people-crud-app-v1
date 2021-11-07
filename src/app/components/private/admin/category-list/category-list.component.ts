import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryslist: any
  constructor(private categoryservice: CategoryService) {
 
  }

  ngOnInit(): void {
    this.categoryservice.getAllCategorys().subscribe(
      res => { this.categoryslist = res }, error => { console.log(error) })
  }

  Delete(category: any) {
    let index = this.categoryslist.indexOf(category)
    this.categoryslist.splice(index, 1)
    this.categoryservice.deleteCategory(category._id).subscribe(
      res => { console.log() },
      err => { console.log(err) }
    )
  }

}
