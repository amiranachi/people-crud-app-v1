import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './components/private/admin/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/category-update/category-update.component';
import { ClientsManagementComponent } from './components/private/admin/clients-management/clients-management.component';
import { OrdersManagementComponent } from './components/private/admin/orders-management/orders-management.component';
import { ProductAddComponent } from './components/private/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/product-update/product-update.component';
import { ProductsListComponent } from './components/private/admin/products-list/products-list.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CartComponent } from './components/public/cart/cart.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/shared/page404/page404.component';

const routes: Routes = [
  //PUBLIC PATHS
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  //PRIVATE PATHS
  //SHARED PATHS
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  //ADMIN PATHS
  {
    path: "admin",
    children: [
      {
        path: "category",
        children:
          [
            {
              path: 'list',
              component: CategoryListComponent
            },
            {
              path: 'add',
              component: CategoryAddComponent
            },
            {
              path: 'update',
              component: CategoryUpdateComponent
            }
          ]
      },

      {
        path: 'product',
        children:
        [
          {
            path: 'list',
            component: ProductsListComponent
          },
          {
            path: 'add',
            component: ProductAddComponent
          },
          {
            path: 'update/:id',
            component: ProductUpdateComponent
          }
        ]
      },
      {
        path: 'clients-management',
        component: ClientsManagementComponent
      },
      {
        path: 'orders-management',
        component: OrdersManagementComponent
      },
    ]
  },

  //CLIENT PATHS
  {
    path: 'my-orders',
    component: MyOrdersComponent
  },
  //404 PATH
  {
    path: '**',
    component: Page404Component
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
