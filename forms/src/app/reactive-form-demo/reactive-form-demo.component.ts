import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent {
  laptopForm: FormGroup;


  constructor(private fb: FormBuilder) {

    // this.laptopForm = new FormGroup({
    //   processor: new FormControl('Intel Core i7'),
    //   ram: new FormControl('16 GB DDR4'),
    // });

    // this.laptopForm = this.fb.group({
    //   processor: 'Intel Core i7',
    //   ram: '16 GB DDR4',
    // });

    this.laptopForm = this.fb.group({
      processor: [
        'Intel core i7', [
          Validators.required,
          Validators.minLength(10),
        ]
      ],

      ram: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
        ],
      ],

    });

  }

  save() {
    console.log(this.laptopForm.controls); // validate status
  }




}
