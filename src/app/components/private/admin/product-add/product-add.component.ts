import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
myForm : FormGroup
  constructor(private fb: FormBuilder) {
let formcontrols={
  Name : new FormControl(),
  desc :  new FormControl(),
  price : new FormControl(),
  category: new FormControl()

}
this.myForm= this.fb.group(formcontrols)
   }

  ngOnInit(): void {
  }
  addproduct()
  {
    console.log(this.myForm.value)
  }
}
