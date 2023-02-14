import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../jwt-auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: Object = {};
  constructor(
    public authService: JwtAuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('email');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.email;
    });
  }

  ngOnInit(): void {
    console.log("user profile");
  }

}
