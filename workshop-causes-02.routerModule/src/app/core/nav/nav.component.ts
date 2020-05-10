import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  get isLogged() {
    return this.userService.isLogged;
  }

  get currentUser() {
    return this.userService.currentUser
  }
  constructor(private userService: UserService) { }



  ngOnInit(): void {
  }

}
