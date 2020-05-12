import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-snackbars',
  templateUrl: './snackbars.component.html',
  styleUrls: ['./snackbars.component.css']
})
export class SnackbarsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  openNotification(message, action) {
    let snackRef = this.snackBar.open(message, action, { duration: 3000 });

    snackRef.afterDismissed().subscribe(x => console.log('notification has been dismissed'));
    snackRef.onAction().subscribe(x => console.log('button is clicked'));
  }



  ngOnInit(): void {
  }
}
