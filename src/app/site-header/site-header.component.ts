import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;
  ngOnInit(){
    this.userSrv.getUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => { }
    });
  }
  constructor(private userSrv: UserService) {
    
  }
  signOut() {
    this.userSrv.signOut();
    this.showSignOutMenu = false;
  }
  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

}
