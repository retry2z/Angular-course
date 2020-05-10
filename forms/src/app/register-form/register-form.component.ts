import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { throttleTime } from 'rxjs/operators';

function passwordMatch(inputFormControl: AbstractControl): ValidationErrors | null {
  return inputFormControl.value.password === inputFormControl.value.rePassword ? null : { passwordMatch: true }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup
  constructor(fb: FormBuilder) {
    this.registerForm = fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      prefix: ['+972', [Validators.required]],
      phone: ['', [Validators.required]],
      role: ['', [Validators.required]],

      passwords: fb.group({
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
        { validators: [passwordMatch] }),

      url: ['', [Validators.required]],
    });

    this.registerForm.valueChanges
      .pipe(throttleTime(1500))
      .subscribe(x => console.log(x));
  }

  submitHandler() {
    console.log('da');
  }

  ngOnInit(): void {
  }

}
