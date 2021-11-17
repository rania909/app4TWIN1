import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { HomeComponent } from './home/home.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
 {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"mainuser", component:MainUserComponent, children:[
        {path:"category/:cat", component:ListuserComponent}

  ]},
  {path:"mainproduct", component:MainProductComponent},
  {path:"mainprovider", component:MainProviderComponent},
  {path:"login", component:LoginUserComponent},
  {path:"invoices", component:ListInvoiceComponent},
  {path:"convert", component:ConvertisseurComponentComponent},
  {path:"listproduit", component:ListproduitsComponent},
  {path:"**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
