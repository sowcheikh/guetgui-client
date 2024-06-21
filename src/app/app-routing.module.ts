import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {ForgotPasswordComponent} from "./pages/auth/forgot-password/forgot-password.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {ResetPasswordComponent} from "./pages/auth/reset-password/reset-password.component";
import {AccountComponent} from "./pages/admin/account/account.component";
import {BodyComponent} from "./pages/admin/body/body.component";
import {HelpComponent} from "./pages/admin/help/help.component";
import {RegistreComponent} from "./pages/admin/registre/registre.component";
import {SettingsComponent} from "./pages/admin/settings/settings.component";
import {SuivisMedicalComponent} from "./pages/admin/suivis-medical/suivis-medical.component";
import {ReproductionComponent} from "./pages/admin/reproduction/reproduction.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth-forgot-password', component: ForgotPasswordComponent },
  { path: 'auth-register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'body', component: BodyComponent },
      { path: 'help', component: HelpComponent },
      { path: 'registre', component: RegistreComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'suivi-medical', component: SuivisMedicalComponent },
      { path: 'reproduction', component: ReproductionComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
