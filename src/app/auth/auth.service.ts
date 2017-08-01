import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AuthService as _auth } from 'ng2-ui-auth';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  private currentUser: any;
  private errors: string[];

  constructor(private http: Http, private authHttp: AuthHttp, private router: Router, private auth: _auth) {
    this.currentUser = new ReplaySubject(1);
    
    if (this.isAuthenticated()) {
      this.authHttp.get('/api/user').map(r => r.json()).subscribe(user => {
        this.currentUser.next(user);
      })
    }
  }

  getCurrentUser = () => this.currentUser;

  setCurrentUser = (user) => this.currentUser.next(user);

  register = (user) => this.auth.signup(user).map(r => r.json())

  login = (user) => this.auth.login(user).map(r => r.json())

  logout = () => this.auth.logout().subscribe({
    error: (error: any) => console.error('Error on logout', error),
    complete: () => this.router.navigateByUrl('/')
  })

  authenticate = (provider) => this.auth.authenticate(provider).subscribe({
    next: (r) => console.log(r),
    error: (err: any) => console.error('Error', err),
    complete: () => this.router.navigateByUrl('/')
  })

  isAuthenticated = () => this.auth.isAuthenticated()

}
