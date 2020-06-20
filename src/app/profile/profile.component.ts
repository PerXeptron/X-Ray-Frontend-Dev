import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { UserService } from '../user.service';
import { StoreuserService } from '../storeUser.service';
import { XrayService } from '../xray.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService, XrayService]
})
export class ProfileComponent implements OnInit {
  currentuserid;
  crntauthenticuser;
  userinfo;
  pastxrays;
  pastxraydetails;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private xrayService: XrayService,
    private storeuserService: StoreuserService,
    ) { 
      this.crntauthenticuser = this.storeuserService.getcrntuserid();
      this.pastxrays = [];
      this.pastxraydetails = [];
    }

  ngOnInit(){
    this.userService.getCurrentUser(this.storeuserService.crnttokenkey).subscribe(
      response => {
        this.userinfo = response;
        this.pastxrays = this.userinfo.pastxrays;
        this.getXrayDetails();
      },
      error => {console.log('error', error)}
    );
    
    this.route.paramMap.subscribe(params => {
      this.currentuserid = params.get('userId');
      if(this.crntauthenticuser != this.currentuserid){
          this.router.navigate(['/login']);
      }
    });  
  }

  getXrayDetails(){
    for (var xrayid of this.pastxrays){
      this.xrayService.getXRayInfo(this.storeuserService.crnttokenkey, {'xray_id' : xrayid}).subscribe(
        response => {
          this.pastxraydetails.push(response)
        },
        error => {console.log('error', error)}
      );
    }
  }

  uploadWindow(){
    this.router.navigate(['/users', this.crntauthenticuser, 'upload']);
  }

}
