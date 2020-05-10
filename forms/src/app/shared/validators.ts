import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(inputFormControl: AbstractControl): ValidationErrors | null {
    return inputFormControl.value.password === inputFormControl.value.rePassword ? null : { passwordMatch: true }
}