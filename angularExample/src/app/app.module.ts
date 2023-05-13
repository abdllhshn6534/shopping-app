import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
//import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountService } from './service/account.service';
import { LoginGuard } from './login/login.guard';
@NgModule({ //dekoratör
  declarations: [ //componentin tanımlandığı kısımdır yukarda da import ettik
    AppComponent,
    ProductComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
   // ProductAddForms2Component,
    LoginComponent
  ],
  imports: [ //başka modüllerin import edildiği yerdir örneğin http client module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent] //başlangıç componenti belirtir
})
export class AppModule { }
