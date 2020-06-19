import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { StoreuserService } from '../storeUser.service';

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
    private storeUserService: StoreuserService
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
            this.storeUserService.crnttokenkey = response.token;
            this.storeUserService.crntauthenticuser = response.userid;
            alert('User ' + response.username + ' has been logged in')
            this.router.navigate(['/users', this.storeUserService.crntauthenticuser]);
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
