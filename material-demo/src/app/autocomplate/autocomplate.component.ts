import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplate',
  templateUrl: './autocomplate.component.html',
  styleUrls: ['./autocomplate.component.css']
})

export class AutocomplateComponent implements OnInit {

  options = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vure' },
  ];

  myControl = new FormControl();
  filteredOption: Observable<{ name: string }[]>
  constructor() { }

  ngOnInit(): void {
    this.filteredOption = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayFn(subject) {
    console.log(subject); // what is selected.
    return subject ? subject.name : null
  }

  _filter(value: string) {
    const data = value.toLocaleLowerCase();
    return this.options.filter(x => (x.name).toLocaleLowerCase().includes(data));
  }

}
