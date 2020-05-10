import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test title variable';

  visible = false;

  users = [
    { name: "Pesho", age: 21 },
    { name: "Gosho", age: 21 },
    { name: "Nick", age: 21 },
    { name: "Vlado", age: 21 },
  ];

  toggleVisible(event: MouseEvent) {
    console.log(event);

    this.visible = !this.visible;
  }

  setTitle(data: string) {
    this.title = data;

  }

  deleteUserHandler(user) {
    this.users = this.users.filter(x => x !== user);
  }
}
