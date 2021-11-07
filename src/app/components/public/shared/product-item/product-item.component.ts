import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() image!: string
  @Input() name!: string
  @Input() price!: number

  constructor() { }

  ngOnInit(): void {
  }

}
