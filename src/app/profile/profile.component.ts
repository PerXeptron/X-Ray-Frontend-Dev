import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { UserService } from '../user.service';
import { XrayService } from '../xray.service';
import { TokenManager } from '../tokenmanager.service';

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
    private tokenManager: TokenManager,
    ) { 

      this.crntauthenticuser = this.tokenManager.retrieveToken().userid;
      if(this.crntauthenticuser == -1){
        this.router.navigate(['/login']);
      }
      this.pastxrays = [];
      this.pastxraydetails = [];
    }

  ngOnInit(){
    this.userService.getCurrentUser(this.tokenManager.retrieveToken().token).subscribe(
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
      this.xrayService.getXRayInfo(this.tokenManager.retrieveToken().token, {'xray_id' : xrayid}).subscribe(
        response => {
          this.pastxraydetails.push(response)
        },
        error => {console.log('error', error)}
      );
    }
    console.log(this.pastxraydetails);
  }

  uploadWindow(){
    this.router.navigate(['/users', this.crntauthenticuser, 'upload']);
  }

  logout(){
    this.tokenManager.destroyToken();
    this.router.navigate(['/']);
  }
}
