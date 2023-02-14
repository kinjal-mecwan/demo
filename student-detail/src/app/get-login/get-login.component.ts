import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../login/login';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-get-login',
  templateUrl: './get-login.component.html',
  styleUrls: ['./get-login.component.scss']
})
export class GetLoginComponent implements OnInit {
  logins=new  Login()
  allUsers
  _isDisabled = false;
  id
getloginForm:FormGroup;

  constructor(private _NgbActiveModal: NgbActiveModal,private studentService:StudentService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getloginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
     studentId:[''],
     l_Id:['']
    });
    this.users();

    this.studentService.getLoginMethod().subscribe(
      data => this.logins = data
    )
    this. deatillogin(this.logins);
    
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
    })
    }, (error) => { console.log(error) });
    console.log(this.studentService.getLoginDetail(id).subscribe((Response:any) => { this.getloginForm.patchValue({
      studentId : Response.studentId,
      userName : Response.userName,
      password :Response.password,
      l_Id:Response.l_Id
    }) }, (error) => { console.log(error) }))
  }
}
