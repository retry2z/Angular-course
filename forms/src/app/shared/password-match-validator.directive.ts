import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from './validators';

@Directive({
  selector: '[appPasswordMatch][ngModelGroup]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordMatchValidatorDirective,
    multi: true,
  }]
})
export class PasswordMatchValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return passwordMatch(control);
  }
}
