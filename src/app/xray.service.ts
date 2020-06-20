
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' ,
})

export class XrayService {

    constructor(
        private http: HttpClient
    ) { }

    getXRayInfo(tokenkey, xraydata): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Authorization': `Token ${tokenkey}`,
            })
        };
        return this.http.post('http://127.0.0.1:8000/api/chexray/xray/', xraydata, httpOptions);
    }

    uploadXRay(tokenkey, formData): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Authorization': `Token ${tokenkey}`,
            })
        };
        return this.http.post('http://127.0.0.1:8000/api/chexray/upload/', formData, httpOptions);
    }
}