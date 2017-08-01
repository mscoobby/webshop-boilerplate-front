import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private errors: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register = (user: NgForm) => {
    this.authService.register(user.value).subscribe(response => {
      console.log('Response', response)
      this.authService.login(user.value).subscribe(response => {
        this.authService.setCurrentUser(response.user);
        this.router.navigateByUrl('/');
      }, error => {
        this.errors = [error.json()]
        console.error('Error', this.errors)
      })
    }, error => {
      let err = error.json()
      if (Array.isArray(err)) {
        this.errors = err
      } else {
        this.errors = [err]
      }
      console.error('Error', this.errors)
    })
  }
}
