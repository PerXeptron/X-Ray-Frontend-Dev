import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

import { UserService } from './user.service';

import { StoreuserService } from './storeUser.service';

import { XrayService } from './xray.service';

import { AnonuploadComponent } from './anonupload/anonupload.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
