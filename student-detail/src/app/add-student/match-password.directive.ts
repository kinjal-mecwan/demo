import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { StudentService } from '../student.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective {
  @Input('appMatchPassword') MatchPassword: string[] = [];
  constructor(private studentService:StudentService) { }
  validate(formGroup: FormGroup): ValidationErrors {
    return this.studentService.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
  }
}
