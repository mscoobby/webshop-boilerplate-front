import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: LandingComponent
    }, {
      path: 'shop',
      component: ShopComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }])

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
