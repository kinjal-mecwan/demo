import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetStudentComponent implements OnInit {
  /*
    intialization
  */ 
  id
  getStudentForm=new Stud();

  /*
    constructor
  */
  constructor(private studentService:StudentService,private route:ActivatedRoute,private toastr: ToastrService) { }

  /*
    OnInit Method
  */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['getStudent.studentId'];
    this.deatilStudent(this.id)
    this.toastr.success("Student Deatil page")
  }

  /*
    fatch student detail
  */
  deatilStudent(id: number) {
    this.studentService.getDetail(id).subscribe((Response) => {
      this.getStudentForm.studentId = Response.studentId,
      this.getStudentForm.name = Response.name,
      this.getStudentForm.address = Response.address,
      this.getStudentForm.mobile_no = Response.mobile_no,
      this.getStudentForm.pincode = Response.pincode,
      this.getStudentForm.emailId = Response.emailId,
      this.getStudentForm.password=Response.password
    }, (error) => { console.log(error) });
    console.log(this.studentService.getDetail(id).subscribe((Response) => { this.getStudentForm = Response }, (error) => { console.log(error) }))
  }
}
