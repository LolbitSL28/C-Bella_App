import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StartPageComponent } from './start-page/start-page.component';
import { DealsPageComponent } from './deals-page/deals-page.component';
import { DealsListComponent } from './deals-list/deals-list.component';
import { DealsDetailsComponent } from './deals-details/deals-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CarruselComponent,
    ProductsPageComponent,
    ProductListComponent,
    StartPageComponent,
    DealsPageComponent,
    DealsListComponent,
    DealsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: StartPageComponent },
      { path: 'products',component:ProductsPageComponent},
      { path: 'deals',component:DealsPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
