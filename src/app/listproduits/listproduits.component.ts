import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainProductComponent } from '../main-product/main-product.component';
import { Products } from '../models/products';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css'],
  providers:[ProductServiceService]
})
export class ListproduitsComponent implements OnInit {
  list : Products[]
  listin: Products[]

  constructor(private ps:ProductServiceService, private ac:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {

    this.ps.getAllProductsFromDB().subscribe(res=>{this.list=res;this.listin=this.list;
      this.ac.paramMap.subscribe(
        res => {
          return Products;
        // console.log(res.get('cat')); 
        // this.list=this.listInitiale.filter((user) =>{
        //    return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
        });
      });
      
      
    
    
    

  }
  deleteProduct(id:number){
    this.ps.deleteProduct(id).subscribe(res=>this.route.navigateByUrl("/listproduit")); 
  
  
  }

}
