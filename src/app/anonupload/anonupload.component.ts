import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { XrayService } from '../xray.service';
@Component({
selector: 'anonupload-component',
templateUrl: './anonupload.component.html',
styleUrls: ['./anonupload.component.css'],
providers: [XrayService]
})
export class AnonuploadComponent implements OnInit {
    fileToUpload;
    formData;
    predictionData;
    url = '';
    registerView = 'uploadView';
  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private xrayService: XrayService,
    ) { 
    }
  
    ngOnInit(): void {
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
  
      this.xrayService.anonUploadXRay(formData).subscribe(
        response => {
          this.predictionData = response;
          console.log(response);
          this.registerView = 'resultView';
        },
        error => {console.log('error', error)}
      );
    }

    gohome(){
      this.router.navigate(['']);
    }
  
}