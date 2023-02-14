import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  /*
    intialization
  */ 
  addStudForm=new Stud();

  /*
    constructor
  */ 
  constructor(private studentService:StudentService,private route:Router,private toastr: ToastrService,private SpinnerService: NgxSpinnerService) { }

  /*
    OnInit Method
  */ 
  ngOnInit(): void { 
    this.SpinnerService.show();

    setTimeout(() => {
      this.SpinnerService.hide();
    }, 1000);
  }

  /*
    Submit the form data
  */
  onSubmit(){
    setTimeout(() => {
      this.SpinnerService.show(); 
    }, 7000);
   
    this.addStud();
    setTimeout(() => {
      this.SpinnerService.hide();
    }, 7000);
  }

  /*
    add student record
  */
  addStud(){
    this.studentService.addStudent(this.addStudForm).subscribe((res)=>{
      console.log(JSON.stringify(res));
   
      this.toastr.success("Student Data Added")
      this.route.navigate(['']);
    })
  }
    
  /*
    for reset the form
  */
  onReset(StudentInfo){
    StudentInfo.onReset();
  }

}
