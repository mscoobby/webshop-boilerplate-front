import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private errors:any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  login = (user: NgForm) => {
    this.authService.login(user.value).subscribe(response => {
      this.authService.setCurrentUser(response.user);
      this.router.navigateByUrl('/');
    }, error => {
      this.errors = [error.json()]
      console.error('Error', this.errors)
    })
  }
  authenticate = (provider) => this.authService.authenticate(provider)

}
