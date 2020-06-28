import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { WeatherComponent } from "./weather/weather.component";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { LogoutGuard } from './logout.guard';

const routes: Routes = [ 
{ path: 'add', component: AddComponent ,canActivate:[GuardGuard]},
{ path: 'list', component: ListComponent ,canActivate:[GuardGuard]},
{ path: 'update/:i', component: UpdateComponent ,canActivate:[GuardGuard] },
{ path: 'Weather', component: WeatherComponent ,canActivate:[GuardGuard]},
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent,canActivate:[LogoutGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
