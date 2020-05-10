import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  _id: any;
  constructor() { }

  setIdentification(data: any) {
    this._id = data;
    console.log(data);
  }

  ngOnInit(): void {
  }

}
