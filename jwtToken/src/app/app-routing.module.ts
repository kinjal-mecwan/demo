import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [{ path: '', redirectTo: '/log-in', pathMatch: 'full' },
{ path: 'log-in', component: SignInComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'user-profile/:email', component: UserProfileComponent, canActivate: [AuthGuardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
