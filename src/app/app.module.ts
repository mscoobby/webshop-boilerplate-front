import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';

import { environment } from '../environments/environment';

export class AuthConfig extends CustomConfig{
  defaultHeaders = {'Content-Type': 'application/json', 'X-Powered-With': 'XMLHttpRequest'};
  tokenName = 'auth_token';
  authToken = 'JWT';
  tokenPrefix = '';
  loginUrl = '/api/user/login';
  signupUrl = '/api/user/signup'
  providers = {
    facebook: environment.facebook,
    google: environment.google,
    instagram: environment.instagram,
    twitter: environment.twitter
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    HttpModule,
    JsonpModule,
    Ng2UiAuthModule.forRoot(AuthConfig),
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '',
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
    }, {
      path: 'profile',
      canActivate: [AuthGuard],
      component: ProfileComponent
    }])

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
