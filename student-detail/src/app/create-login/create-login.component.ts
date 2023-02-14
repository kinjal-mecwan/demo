import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../login/login';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.scss']
})
export class CreateLoginComponent implements OnInit {
  addLoginForm:FormGroup;
  allUsers;
  post=new Login();
  constructor(private studentService:StudentService,private _NgbActiveModal: NgbActiveModal,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addLoginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
     studentId:['',Validators.required]
    });

    this.users();
  }
  users(): void {
    this.studentService.getStudent().subscribe((Response:any) => { this.allUsers = Response ; }, (error) => { console.log(error)
  });
}
  get activeModal() {
    return this._NgbActiveModal;
  }
  get value(){
    return this.addLoginForm.controls;
  }
  onSubmit(){
    this.addLogin();
    // alert(JSON.stringify(this.addLoginForm.value))
  }
  addLogin(){
    debugger
  
    this.studentService.addLogin(this.addLoginForm.value).subscribe((Response)=>{ Response ;  this.activeModal.close(true);  window.location.reload();});
 
    // this.studentService.addLogin(this.addLoginForm.value).subscribe((res)=>{
    //   alert(res)
    //   console.log(JSON.stringify(res));
    //   this.activeModal.close(true)
    //   window.location.reload();
    // })
    console.log(JSON.stringify(this.post))
  }
}
