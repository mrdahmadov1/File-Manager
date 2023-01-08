import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeesComponent } from './fees/fees.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  },
  {
    component: RegistrationComponent,
    path: 'registration',
  },
  {
    component: AppointmentComponent,
    path: 'appointment',
  },
  {
    component: StatusComponent,
    path: 'status',
  },
  {
    component: FeesComponent,
    path: 'fees',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
