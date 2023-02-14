import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  /*
    intialization
  */ 
  id
  editStudentForm=new Stud();
  
  /*
    constructor
  */ 
  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  /*
    OnInit Method
  */ 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['getStudent.studentId'];
    this.deatilStudent(this.id)
  }

  /*
    fatch the student detail
  */ 
  deatilStudent(id: number) {
    debugger
    this.studentService.getDetail(id).subscribe((Response) => {
      this.editStudentForm.studentId = Response.studentId,
      this.editStudentForm.name = Response.name,
      this.editStudentForm.address = Response.address,
      this.editStudentForm.mobile_no = Response.mobile_no,
      this.editStudentForm.pincode = Response.pincode,
      this.editStudentForm.emailId = Response.emailId,
      this.editStudentForm.password=Response.password
     
    }, (error) => { console.log(error) });
    console.log(this.studentService.getDetail(id).subscribe((Response) => { this.editStudentForm = Response }, (error) => { console.log(error) }))
  }

  /*
    update the student record
  */
  onUpdate(){
    this.editStud();
  }
  editStud(){
    debugger
    this.studentService.updateStudent(this.editStudentForm,this.id).subscribe((res)=>{
      console.log(JSON.stringify(res));
  
      this.toastr.success("Student Data updated") 
      
      this.router.navigate(['']);
    })
  }
  onReset(StudentInfo){
    StudentInfo.onReset();
    this.deatilStudent(this.id)
  }

}
