import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Directive({
  selector: '[appValidateEmail]',
  providers: [
    {
      provide:  NG_ASYNC_VALIDATORS,
      useExisting: ValidateEmailDirective,
      multi: true,
    },
  ],
})
export class ValidateEmailDirective  implements AsyncValidator  {

  constructor(private studentService: StudentService) { }
  
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

   return this.studentService.validateEmail(control.value).pipe(
      map(users=>{
        console.log(users)
        return users ? { Email: { value: control.value } } : null;
    })
    );
  }  
}
