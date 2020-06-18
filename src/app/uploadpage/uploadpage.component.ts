import { Component,  } from '@angular/core';

@Component({
  selector: 'app-uploadpage',
  templateUrl: './uploadpage.component.html',
  styleUrls: ['./uploadpage.component.css']
})
export class UploadpageComponent  {

  name = 'Angular 4';
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        
        if (typeof event.target.result === 'string') {this.url=event.target.result;}
        else {this.url=event.target.result.toString()}
      }
    }
  }

}
