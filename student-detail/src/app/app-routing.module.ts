import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetStudentComponent } from './get-student/get-student.component';
import { LoginComponent } from './login/login.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [ {path: '', component: StudentInfoComponent},
{ path: 'add-student', component: AddStudentComponent},
{ path: 'update-student/:getStudent.studentId', component: UpdateStudentComponent},
{ path: 'detail-student/:getStudent.studentId', component: GetStudentComponent},
{ path: 'login-student', component: LoginComponent},
{ path: 'student-page', component: StudentInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
