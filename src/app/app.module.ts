import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { StatusComponent } from './status/status.component';
import { FeesComponent } from './fees/fees.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { AppointModalComponent } from './appoint-modal/appoint-modal.component';
import { AddFeeModalComponent } from './add-fee-modal/add-fee-modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent, DashboardComponent, RegistrationComponent, AppointmentComponent, StatusComponent, FeesComponent, AddModalComponent, AppointModalComponent, AddFeeModalComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
