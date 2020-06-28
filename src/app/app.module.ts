import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { Routes , RouterModule} from '@angular/router';
import { ServiceService } from './Service.Service';
import { UpdateComponent } from './update/update.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { LogoutGuard } from './logout.guard';
import { PipePipe } from './pipe.pipe';

// import {allAppRoutes} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    WeatherComponent,
    RegisterComponent,
    LoginComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    // RouterModule.forRoot(allAppRoutes),
  ],
  providers: [ServiceService ,GuardGuard ,LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
