import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public username: String;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.username = user ? (user.profile && user.profile.name) ? user.profile.name : user.email : '';
    }, error => {
      console.error(error)
    });
  }
}
