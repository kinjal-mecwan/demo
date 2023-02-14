import { Conditional } from '@angular/compiler';
import { Component, OnInit,OnDestroy  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { find, Subject } from 'rxjs';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { StudentService } from '../student.service';
import { Stud } from './stud';



@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
   /*
    intialization
  */ 
  getStudents
  addStudentForm=new Stud();
  allUsers = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  /*y
  
    constructor
  */
  constructor(private studentService:StudentService,private _NgbModal: NgbModal) { }

  /*
    OnInit Method
  */
  ngOnInit(): void {
    //this.get();
    this.users();
  }
  users(): void {
      this.studentService.getStudent().subscribe((Response:any) => { this.allUsers = Response ;  this.dtTrigger.next(this.allUsers);}, (error) => { console.log(error)
    });
  }
  /*
    GET Method for student list
  */
  get() {
    this.studentService.getStudent().subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) ;
    });
  }

  /*
    for open pop up modal
  */
  openModal(id:Stud) {
    this._NgbModal.open(DeleteStudentComponent)
    this.studentService.getStudentById(id);
    
   // this.get()
  }

  /*
    fatch student id
  */
  deatilStudent(id: number) {
    this.studentService.getDetail(id).subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) });
    console.log(this.studentService.getDetail(id).subscribe((Response) => { this.getStudents = Response }, (error) => { console.log(error) }))
  }
  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }
  
}
