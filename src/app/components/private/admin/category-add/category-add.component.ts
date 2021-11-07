import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private categoryservice: CategoryService) {
    let formControls = {
      categoryname: new FormControl()
    }
    this.myForm = fb.group(formControls);
  }

  ngOnInit(): void {
  }
  savegategory() {
    let data = this.myForm.value;
    let category = new Category(data.categoryname)
    this.categoryservice.addCategory(category).subscribe(
      res=>{console.log(res)}
      , error=>{console.log(error)});

  }
}
