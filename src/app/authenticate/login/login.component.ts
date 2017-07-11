import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  public login(user: NgForm) {
    return this.authenticateService.login(user.value).then(user => {
      console.log(user, '# Authenticate Response #')
    }).catch(error => {
      console.error(error, '# Authenticate Error #')
    })
  }

}
