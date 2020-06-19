
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class StoreuserService {
    crntauthenticuser;
    crnttokenkey;

    constructor() {
        this.crntauthenticuser = -1;
        this.crnttokenkey = "";
    }

    getcrntuserid() {
        console.log(this.crntauthenticuser);
        return this.crntauthenticuser;
    }
}