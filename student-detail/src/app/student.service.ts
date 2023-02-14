import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { data } from 'jquery';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from './login/login';
import { Stud } from './student-info/stud';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /*
    intialize variable with api
  */
  private url = "https://localhost:44369/api/Student/";
  private url1="https://localhost:44369/api/login/";
  
   /*
     constructor
  */
  constructor(private http: HttpClient) { }

  /*
     BehaviorSubject
  */
  private student:BehaviorSubject<Stud> = new BehaviorSubject<Stud>(null); 
  private login:BehaviorSubject<Login> = new BehaviorSubject<Login>(null); 

   /*
    get method for return list of student
  */
  getStudent() {
    return this.http.get(this.url);
  }

   /*
     for insert record
  */
  addStudent(std: Stud): Observable<any> {
    return this.http.post(this.url,std);
  }

  /*
     for delete record
  */
  deleteStudent(std:number): Observable<any> {
    return this.http.delete<any>(this.url + std);
  }

  /*
     for fatch student record
  */
  getStudentById(id: Stud) {
    this.student.next(id);
  }

  /*
     for delete record
  */
  updateStudent(std: Stud,id:number): Observable<any> {
    debugger
    const body = JSON.stringify(std);
    return this.http.put(this.url+id, std);
  }

  /*
     for fatch student record
  */
  getDetail(std: number): Observable<any> {
    return this.http.get(this.url + std);
  }

 
  
  /*
     for fatch student emailId
  */
  validateEmail(Email: string) {
    debugger
        const emailList= this.http.get("https://localhost:44369/api/checkEmail/"+Email);    
   
        return (emailList);
  }

  /*
     observable method
  */
  getMethod(){
    return this.student.asObservable();
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[6-9][0-9]{0,9}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPattern: true };
    };
  }


  passwordPattern(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  getLogin() {
    return this.http.get(this.url1);
  }
   addLogin(login:Login) : Observable<any> {
    debugger
    var headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
        }
     const body=JSON.stringify({login})
  
    return this.http.post('https://localhost:44369/api/postData/',login,headers);

  }
 

  deleteLogin(std:number): Observable<any> {
    debugger
    return this.http.delete<any>(this.url1 + std);
  }
  getLoginById(id: Login) {
    this.login.next(id);
  }
  getLoginMethod(){
    return this.login.asObservable();
  }

  getLoginDetail(lId: Login): Observable<any> {
  
    return this.http.get(this.url1 + lId);
  }
  editLogin(login:Login): Observable<any> {
    debugger
    var headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
        }

  return this.http.put(this.url1+login.l_Id,login,headers)
  }

  getStudents():Observable<Stud[]>{
    return this.http.get<Stud[]>(this.url);
  }
}