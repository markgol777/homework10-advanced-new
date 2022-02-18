import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DiscountAdminComponent } from './pages/admin/discount-admin/discount-admin.component';
import { CategoryAdminComponent } from './pages/admin/category-admin/category-admin.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ProductsComponent } from './pages/products/products.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { GeneralProductsComponent } from './pages/general-products/general-products.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { PhiladelphiaProductComponent } from './pages/philadelphia-product/philadelphia-product.component';
import { CaliforniaProductComponent } from './pages/california-product/california-product.component';
import { BakedProductComponent } from './pages/baked-product/baked-product.component';
import { BrandedProductsComponent } from './pages/branded-products/branded-products.component';
import { PoppiesProdcutsComponent } from './pages/poppies-prodcuts/poppies-prodcuts.component';
import { PremiumProductComponent } from './pages/premium-product/premium-product.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    DiscountsComponent,
    AboutUsComponent,
    DeliveryPaymentComponent,
    AdminComponent,
    DiscountAdminComponent,
    CategoryAdminComponent,
    GeneralProductsComponent,
    ProductsComponent,
    AllProductsComponent,
    PhiladelphiaProductComponent,
    CaliforniaProductComponent,
    BakedProductComponent,
    BrandedProductsComponent,
    PoppiesProdcutsComponent,
    PremiumProductComponent,
    ProductAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
