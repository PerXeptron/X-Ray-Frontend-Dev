import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register;
  signupdata;

  constructor(
    private router: Router,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.register = {
      username: '',
      password: '',
      password2: '',
    };
  }
  gohome(){
    this.router.navigate(['/']);
  }

  anon(){
    this.router.navigate(['/anonupload']);
  }

  clickLogin(){
    this.router.navigate(['/login']);
  }

  registerNewUser(){
    this.userService.registerUser(this.register).subscribe(
      response => {
        if (response.token != null){
            alert("User Registered Sucessfully");
            this.router.navigate(['/login']);
        }
        else
        {
            alert(response.username)
        }
      },
      error => {
        console.log(error.error);
        if (error.error.password != null){
            alert(error.error.password)
        }
        else if (error.error.username != null){
            alert(error.error.username)
        }
      }
    );
  }

}
