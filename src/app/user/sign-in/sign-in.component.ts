import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  showSignOutMenu:boolean=false;
  constructor(private userSrv: UserService, private router: Router) {

  }
  signIn() {
    this.userSrv.signIn(this.credentials).subscribe({
      next: () => {
        //input is array because it wants to create url
        this.router.navigate(['/cataloge']);
      }
    });
  }
  singOut()
  {
    this.userSrv.signOut();
    this.showSignOutMenu=false;
  }
}
