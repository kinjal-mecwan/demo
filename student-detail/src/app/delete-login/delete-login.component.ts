import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-login',
  templateUrl: './delete-login.component.html',
  styleUrls: ['./delete-login.component.scss']
})
export class DeleteLoginComponent implements OnInit {
  logins
  constructor(private _NgbActiveModal: NgbActiveModal,private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getLoginMethod().subscribe(
      data => this.logins = data
    )
  }
  get activeModal() {
    return this._NgbActiveModal;
  }
  confirmDelete(){
    debugger
    this.studentService.deleteLogin(this.logins).subscribe((response)=>{
    this.activeModal.close(true)
      window.location.reload();
      
    },(error=>{
    }));
    
  }
}
