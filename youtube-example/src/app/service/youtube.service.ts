import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class YoutubeService {
    constructor(private http: HttpClient) {}
    
    getSearchChannel(q: string): Observable<any> {
        const url: string = environment.url + `?part=snippet&q=${q}&type=channel&key=${environment.key}`; 
        let result: any;
        try {
            result = this.http.get<any>(url).pipe();
        } catch (e) {
            console.log('eeee', e);
        }
        return result;
    }   
}