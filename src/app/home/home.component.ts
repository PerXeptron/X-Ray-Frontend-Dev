import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TokenManager } from '../tokenmanager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenManager : TokenManager,
  ) { }

  ngOnInit(): void {
  }
  anon(){
    this.router.navigate(['/anonupload']);
  }
  goreg(){
    this.router.navigate(['/register']);
  }
  clickLogin(){
    if(this.tokenManager.retrieveToken().token != ""){
      this.router.navigate(['/users', this.tokenManager.retrieveToken().userid]);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
