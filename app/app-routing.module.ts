import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DiscountAdminComponent } from './pages/admin/discount-admin/discount-admin.component';
import { CategoryAdminComponent } from './pages/admin/category-admin/category-admin.component';

import { AllProductsComponent } from './pages/all-products/all-products.component';
import { PhiladelphiaProductComponent } from './pages/philadelphia-product/philadelphia-product.component';
import { CaliforniaProductComponent } from './pages/california-product/california-product.component';
import { BakedProductComponent } from './pages/baked-product/baked-product.component';
import { BrandedProductsComponent } from './pages/branded-products/branded-products.component';
import { PoppiesProdcutsComponent } from './pages/poppies-prodcuts/poppies-prodcuts.component';
import { PremiumProductComponent } from './pages/premium-product/premium-product.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'discounts', component: DiscountsComponent},
  {path: 'product-category/:product', component: ProductsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'delivery-payment', component: DeliveryPaymentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/discount', component: DiscountAdminComponent},
  {path: 'admin/category', component: CategoryAdminComponent},
  {path: 'admin/product', component: ProductAdminComponent},



  {path: 'all-products', component: AllProductsComponent},
  {path: 'philadelphia-products', component: PhiladelphiaProductComponent},
  {path: 'california-products', component: CaliforniaProductComponent},
  {path: 'baked-products', component: BakedProductComponent},
  {path: 'branded-products', component: BrandedProductsComponent},
  {path: 'poppies-products', component: PoppiesProdcutsComponent},
  {path: 'premium-products', component: PremiumProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
