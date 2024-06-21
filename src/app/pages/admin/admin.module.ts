import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule, DatePipe, NgClass, NgForOf, NgIf, SlicePipe} from '@angular/common';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {BodyComponent} from "./body/body.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialogModule,
} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistreComponent} from "./registre/registre.component";
import {AccountComponent} from "./account/account.component";
import {ReproductionComponent} from "./reproduction/reproduction.component";
import {SettingsComponent} from "./settings/settings.component";
import {SuivisMedicalComponent} from "./suivis-medical/suivis-medical.component";
import { MatSelectModule} from "@angular/material/select";
import {
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule,
  NativeDateAdapter,
} from "@angular/material/core";
import {ChooseMaleModalComponent} from "./reproduction/choose-male-modal/choose-male-modal.component";
import {AddComponent} from "./registre/add/add.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HelpComponent} from "./help/help.component";
import {DetailComponent} from "./registre/detail/detail.component";


@NgModule({
  declarations: [DashboardComponent, BodyComponent,
    SidenavComponent, SuivisMedicalComponent, HelpComponent,
    FooterComponent, ReproductionComponent, SettingsComponent, DetailComponent,
    TopbarComponent, RegistreComponent, AccountComponent, ChooseMaleModalComponent, AddComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    NgClass,
    MatSelectModule,
    MatOptionModule,
    NgForOf,
    MatInputModule,
    NgForOf,
    SlicePipe,
    RouterLink,
    NgClass,
    RouterLinkActive,
    RouterLink,
    NgIf,
    FormsModule,
    DatePipe,
    MatButtonModule, MatDialogModule, ReactiveFormsModule, NgIf, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [DashboardComponent, BodyComponent,
    SidenavComponent, SettingsComponent, SuivisMedicalComponent,
    FooterComponent, ReproductionComponent, HelpComponent, DetailComponent,
    TopbarComponent, RegistreComponent, AccountComponent, ChooseMaleModalComponent, AddComponent],
  providers: [ NativeDateAdapter, { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' } ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
