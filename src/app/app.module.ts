import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { ListproduitsComponent } from './listproduits/listproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    HeaderComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundPageComponent,
    HomeComponent,
    FormUserComponent,
    LoginUserComponent,
    ParentComponent,
    FilsComponent,
    ListInvoiceComponent,
    EditInvoiceComponent,
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    ListproduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //template driven : ngModel et ngForm
    ReactiveFormsModule, //formGroup, formControlName
    HttpClientModule,

  ],
  //providers: [UserService],//chnouma les services eli bech nestaamlouhom
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
