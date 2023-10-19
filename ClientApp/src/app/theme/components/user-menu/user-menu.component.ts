import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Forms/Login/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/user.jpg';
  userData: any = {};
  constructor(private _authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
    this._authService.getUserData().subscribe(res=>{
      console.log('first', res);
      this.userData = res || {};
    });
  }

  onLogout() {
    this._authService.logout();
    this.router.navigate(['/login'])
  }

}
