import { Routes } from '@angular/router';
import { LoginPageComponent } from './routers/auth/login-page/login-page.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { SearchCustomerPageComponent } from './routers/customers/search-customer-page/search-customer-page.component';
import { CreateCustomerPageComponent } from './routers/customers/create-customer-page/create-customer-page.component';
import { ContactMediumComponent } from './features/customers/components/contact-medium/contact-medium.component';
import { AddressInfoComponent } from './features/customers/components/address-info/address-info.component';

export const routes: Routes = [
  {
    path: "auth/login",
    component: LoginPageComponent,
  },
  {
    path:"home",
    component: MainLayoutComponent,
    children:[
      {
        path:"search",
        component:SearchCustomerPageComponent,
      },
      {
        path: "create-customer",
        component: CreateCustomerPageComponent,
        // children:[
        // {
        //   path: "adresinfo",
        //   component: ,
        // },
        // {
        //   path: "kontakmediu",
        //   component: ,
        // },
        // ]
    },
    {
        path: "contact-medium",
        component: ContactMediumComponent,
      },
      {
        path: "address-info",
        component: AddressInfoComponent
      }
    ]
  }

];
