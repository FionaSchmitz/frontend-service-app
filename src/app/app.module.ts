import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import {Route, RouterModule} from '@angular/router';
import { LocationComponent } from './location/location.component';7
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import {MatFormFieldModule, MatSelectModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Route[] = [
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'kitchen',
    component: KitchenComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LocationComponent,
    ProductsComponent,
    SettingsComponent,
    KitchenComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
