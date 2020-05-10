import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Input() user: { name: string, age: number };
  constructor() { }

  ngOnInit(): void {
  }

  deleteHandler() {
    this.delete.emit(this.user);
  }
}
