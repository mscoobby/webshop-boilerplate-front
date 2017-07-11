import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  public register(user: NgForm) {
    return this.authenticateService.register(user.value).then(user => {
      console.log(user, '# Authenticate Response #')
    }).catch(error => {
      console.error(error, '# Authenticate Error #')
    })
  }
}
