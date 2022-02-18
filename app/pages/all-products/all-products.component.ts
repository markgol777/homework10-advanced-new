import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public products!:any;

  constructor(private service: ProductsService, private htpp: HttpClient) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
      
    })
  }

}
