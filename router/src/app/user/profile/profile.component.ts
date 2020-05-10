import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService
      .loadProfile(this.activatedRoute.snapshot.params.id)
      .subscribe(response => {
        this.profile = response;
      });
  }

}
