import { Injectable } from '@angular/core';
import { Products } from './models/products';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
list :Products[];
productsUrl:string='/api/products';
  constructor(private _http:HttpClient) { }
  getAllProducts(){
    this.list=[
      {
        id: 1,
        code: "1568569",
        libelle: "95468",
        prixUnitaire:25,
        tauxTVA:46
      },
      {
        id: 2,
        code: "1561569",
        libelle: "968",
        prixUnitaire:26,
        tauxTVA:47
      },
      {
        id: 3,
        code: "1568569",
        libelle: "95468",
        prixUnitaire:25,
        tauxTVA:26
      }
    ]
    return this.list;
  }
  getAllProductsFromDB():Observable<Products[]>{
    return this._http.get<Products[]>(this.productsUrl);

  }
  deleteProduct (product: Products | number): Observable<Products> {
    const id = typeof product === 'number' ? product : product.id;
    const url=this.productsUrl+'/'+id;
    return this._http.delete<Products>(url);
    }
}
