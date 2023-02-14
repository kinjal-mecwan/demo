import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GetStudentComponent } from './get-student/get-student.component';

import { ValidateEmailDirective } from './add-student/validate-email.directive';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { PhoneNoValidateDirective } from './add-student/phone-no-validate.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './loader/loader.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordPatternDirective } from './add-student/password-pattern.directive';
import { MatchPasswordDirective } from './add-student/match-password.directive';
import { LoginComponent } from './login/login.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import { DeleteLoginComponent } from './delete-login/delete-login.component';
import { GetLoginComponent } from './get-login/get-login.component';
import { UpdateLoginComponent } from './update-login/update-login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    GetStudentComponent,
    ValidateEmailDirective,
    UpdateStudentComponent,
    PhoneNoValidateDirective,
    NavbarComponent,
    LoaderComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    LoginComponent,
    CreateLoginComponent,
    DeleteLoginComponent,
    GetLoginComponent,
    UpdateLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  NgbModalModule,
  ToastrModule.forRoot(),
  NgxSpinnerModule ,
  DataTablesModule,
  BrowserAnimationsModule,
  ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
