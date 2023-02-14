import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { StudentService } from '../student.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true }]
})
export class PasswordPatternDirective {

  constructor(private studentService:StudentService) { }
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.studentService.passwordPattern()(control);
  }
}
