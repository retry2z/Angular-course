import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.scss']
})
export class LaptopFormComponent {

  @ViewChild('f') form: NgForm;

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  constructor() { }




  onSubmit(f?: NgForm) {
    const content = this.form.value;
    // console.log(f.value); coming from html template in input of the function.
    console.log(content);
  }

}
