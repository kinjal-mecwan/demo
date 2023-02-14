import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { StudentService } from '../student.service';

@Directive({
  selector: '[appPhoneNoValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneNoValidateDirective, multi: true }]
})
export class PhoneNoValidateDirective {

  constructor(private el:ElementRef,private studentService:StudentService) { }
  validate(control: AbstractControl,): { [key: string]: any } | null {
    return this.studentService.patternValidator()(control);
  }
}
