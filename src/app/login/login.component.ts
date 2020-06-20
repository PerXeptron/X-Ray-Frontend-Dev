import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { TokenManager } from '../tokenmanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  input;

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenManager: TokenManager,
  ) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    };
  }

  loginNewUser(){
    this.userService.loginUser(this.input).subscribe(
        response => {
            this.tokenManager.addNewToken(response.token, response.userid);
            //this.storeUserService.crntauthenticuser = response.userid;
            alert('User ' + response.username + ' has been logged in')
            this.router.navigate(['/users', this.tokenManager.retrieveToken().userid]);
        },
        error => {
          console.log(error.error.non_field_errors);
          if (error.error.non_field_errors != null){
            alert(error.error.non_field_errors)
          }
        }
    );        
  }
}
