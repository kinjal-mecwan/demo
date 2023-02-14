import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Login } from '../login/login';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-login',
  templateUrl: './update-login.component.html',
  styleUrls: ['./update-login.component.scss']
})
export class UpdateLoginComponent implements OnInit {
  logins=new  Login()
  allUsers;

  id
getloginForm:FormGroup;
  constructor(private _NgbActiveModal: NgbActiveModal,private studentService:StudentService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getloginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
     studentId:['',Validators.required],
     l_Id:['']
    });
    this.users();

   
    this.studentService.getLoginMethod().subscribe(
      data => this.logins = data
    )

    this. deatillogin(this.logins);
    this.studentService.getLoginById(this.id);
    
  }
  users(): void {
    this.studentService.getStudent().subscribe((Response:any) => { this.allUsers = Response ; }, (error) => { console.log(error)
  });
}
  
  get activeModal() {
    return this._NgbActiveModal;
  }
  deatillogin(id:Login) {
    debugger
    this.studentService.getLoginDetail(id).subscribe((Response) => {  this.getloginForm.patchValue({
      studentId : Response.studentId,
      userName : Response.userName,
      password :Response.password,
      l_Id:Response.l_Id
    });
    
    }, (error) => { console.log(error) });
    // console.log(this.studentService.getLoginDetail(id).subscribe((Response:any) => {  this.getloginForm.patchValue({
    //   studentId : Response.studentId,
    //   userName : Response.userName,
    //   password :Response.password,
    //   l_Id:Response.l_Id
    // }) }, (error) => { console.log(error) }))
  }

  onSubmit(){
   this.editLoginData();
   console.log(this.getloginForm.value);
  }
  editLoginData(){
    debugger
    this.studentService.editLogin(this.getloginForm.value).subscribe((Response:any)=>{  this.getloginForm.setValue({
      studentId : Response.studentId,
      userName : Response.userName,
      password :Response.password
    });  this.activeModal.close(true);  window.location.reload();});
  }
}
