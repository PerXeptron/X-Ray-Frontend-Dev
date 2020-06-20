import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { UserService } from '../user.service';
import { StoreuserService } from '../storeUser.service';
import { XrayService } from '../xray.service';

@Component({
  selector: 'app-uploadpage',
  templateUrl: './uploadpage.component.html', 
  styleUrls: ['./uploadpage.component.css'],
  providers: [UserService, XrayService]
})
export class UploadpageComponent implements OnInit {
  crntauthenticuser;
  currentuserid;
  fileToUpload;
  formData;
  data;
  predictionData;
  url = '';
  registerView = 'uploadView';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private xrayService: XrayService,
    private storeuserService: StoreuserService,
  ) { 
      this.crntauthenticuser = this.storeuserService.getcrntuserid();
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.currentuserid = params.get('userId');
      if(this.crntauthenticuser != this.currentuserid){
          this.router.navigate(['/login']);
      }
    });
  }
  
  onSelectFile(files : FileList) {

    if (files) {
      var reader = new FileReader();
      reader.readAsDataURL(files.item(0)); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        
        if (typeof event.target.result === 'string') {
          this.url=event.target.result;
        }
        else {
          this.url=event.target.result.toString()
        }
      }

      this.fileToUpload = files.item(0); 
      console.log(this.fileToUpload);
    }
  }

  resultWindow(){
    let formData = new FormData(); 

      formData.append('title', "Chest-X-Ray");
      formData.append('image', this.fileToUpload); 

    this.xrayService.uploadXRay(this.storeuserService.crnttokenkey, formData).subscribe(
      response => {
        this.predictionData = response;
        console.log(response);
        this.registerView = 'resultView';
      },
      error => {console.log('error', error)}
    );
  }

  goProfile(){
    this.router.navigate(['/users', this.crntauthenticuser]);
  }

}
