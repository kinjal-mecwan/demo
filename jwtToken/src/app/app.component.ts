import { Component } from '@angular/core';
import { JwtAuthService } from './jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jwtToken';
  constructor(public authService: JwtAuthService) { }
  logout() {
    this.authService.doLogout()
  }
}
