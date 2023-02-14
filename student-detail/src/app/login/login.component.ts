import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateLoginComponent } from '../create-login/create-login.component';
import { DeleteLoginComponent } from '../delete-login/delete-login.component';
import { GetLoginComponent } from '../get-login/get-login.component';
import { StudentService } from '../student.service';
import { UpdateLoginComponent } from '../update-login/update-login.component';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getLogins
  getStudents

  constructor(private studentService:StudentService,private _NgbModal: NgbModal) { }

  ngOnInit(): void {
    this.get();
  this.getStudent();
  }
  get() {
    this.studentService.getLogin().subscribe((Response) => { this.getLogins = Response }, (error) => { console.log(error) ;
    });
  }

  getStudent() {
    this.studentService.getStudent().subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) ;
    });
  }
  openModal() {
    this._NgbModal.open(CreateLoginComponent)
    //this.studentService.getStudentById(id);
   // this.get()
  }
  openDeleteModal(id:Login) {
    this._NgbModal.open(DeleteLoginComponent)
    this.studentService.getLoginById(id);
   // this.get()
  }
  openDetailModal(id:Login) {
   
    this._NgbModal.open(GetLoginComponent)
    this.studentService.getLoginById(id);
    this.studentService.getLoginDetail(id).subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) });
  }
  openUpdateModal(id:Login) {
    debugger
    this._NgbModal.open(UpdateLoginComponent)
    this.studentService.getLoginById(id);
    this.studentService.getLoginDetail(id).subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) });
   // this.get()
  }
}
