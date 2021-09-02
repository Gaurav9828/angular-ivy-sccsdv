import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './landing-page/adminlogin/adminlogin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { WelcomePageComponent } from './landing-page/welcome-page/welcome-page.component';
const routes: Routes = [
  { path: 'radio/active/welcome', component: WelcomePageComponent },
  { path: 'radio/active/nav/bar', component: NavBarComponent },
  { path: 'radio/active/admin/login', component: AdminloginComponent },
  { path: 'radio/active', component: LandingPageComponent },
  /*
  { path: 'student/admission/test/form', component: StudentAdmissionTestFormComponent },
  { path: 'student/welcome', component: StudentWelcomeComponent, canActivate: [AuthGuard]},

  { path: 'common/reset/password', component: ResetPasswordComponent },

  { path: 'admin/fee/statement', component: FeeStatementComponent, canActivate: [AuthGuard] },
  { path: 'admin/fee/pay', component: FeePaymentComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit/profile', component: EditEmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit/profile', component: EditEmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin/fee/structure', component: FeeStructureComponent, canActivate: [AuthGuard] },
  { path: 'admin/student/my/students', component: MyStudentsComponent, canActivate: [AuthGuard]},
  { path: 'admin/student/view', component: ViewStudentComponent, canActivate: [AuthGuard] },
  { path: 'admin/student/registration', component: AddStudentComponent, canActivate: [AuthGuard] },
  { path: 'admin/exam/result', component: ViewExamResultComponent, canActivate: [AuthGuard] },  
  { path: 'admin/exam/edit', component: EditExamComponent, canActivate: [AuthGuard] },
  { path: 'admin/exam/creation', component: CreateExamComponent, canActivate: [AuthGuard]},
  { path: 'admin/employee/view', component: ViewEmployeeComponent, canActivate: [AuthGuard]},
  { path: 'admin/employee/registration', component: EmployeeRegistrationComponent, canActivate: [AuthGuard]},
  { path: 'admin/welcome', component: AdminWelcomeComponent, canActivate: [AuthGuard]},*/
  { path: '**', redirectTo: 'radio/active' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
