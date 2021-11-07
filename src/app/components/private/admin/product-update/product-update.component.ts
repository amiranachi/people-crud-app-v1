import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let idproduct= this.route.snapshot.params.id
    console.log(idproduct)
  }

}
