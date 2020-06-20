import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { LogresultComponent } from './logresult/logresult.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { AnonuploadComponent } from './anonupload/anonupload.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultspageComponent,
    UploadpageComponent,
    LoginComponent,
    RegisterComponent,
    SuccessComponent,
    LogresultComponent,
    ProfileComponent,
    AnonuploadComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'anonupload',component:AnonuploadComponent},
      {path:'users/:userId/upload',component:UploadpageComponent},
      {path:'result', component:ResultspageComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'success',component:SuccessComponent},
      {path:'logresult',component:LogresultComponent},
      {path:'users/:userId', component: ProfileComponent},


      
    ]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
