import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Stud } from '../student-info/stud';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
  /*
    intialization
  */ 
  students
  deletetStudent=new Stud();

  /*
    constructor
  */
  constructor(private _NgbActiveModal: NgbActiveModal,private studentService:StudentService,private toastr: ToastrService) { }
  
  /*
    OnInit method
  */
  ngOnInit(): void {
    this.studentService.getMethod().subscribe(
      data => this.students = data
    )
  }

  /*
    for active pop up modal
  */
  get activeModal() {
    return this._NgbActiveModal;
  }

  /*
    for DELETE the student record
  */
  confirmDelete(){
    this.studentService.deleteStudent(this.students).subscribe((response)=>{
    this.activeModal.close(true)
      window.location.reload();
      this.toastr.success("Student Data Deleted") 
    },(error=>{
    }));
    
  }
}
