import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/private/shared/navbar/navbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { ProductsListComponent } from './components/private/admin/products-list/products-list.component';
import { ClientsManagementComponent } from './components/private/admin/clients-management/clients-management.component';
import { OrdersManagementComponent } from './components/private/admin/orders-management/orders-management.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { PublicNavbarComponent } from './components/public/shared/public-navbar/public-navbar.component';
import { CartComponent } from './components/public/cart/cart.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { HomeComponent } from './components/public/home/home.component';
import { ProductItemComponent } from './components/public/shared/product-item/product-item.component';
import { CategoryAddComponent } from './components/private/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category-update/category-update.component';
import { ProductUpdateComponent } from './components/private/admin/product-update/product-update.component';
import { ProductAddComponent } from './components/private/admin/product-add/product-add.component';
import { Page404Component } from './components/shared/page404/page404.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/private/admin/category-list/category-list.component';
import { CategoryItemComponent } from './components/public/shared/category-item/category-item.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsListComponent,
    ClientsManagementComponent,
    OrdersManagementComponent,
    MyOrdersComponent,
    DashboardComponent,
    PublicNavbarComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductItemComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductUpdateComponent,
    ProductAddComponent,
    Page404Component,
    CategoryListComponent,
    CategoryItemComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
