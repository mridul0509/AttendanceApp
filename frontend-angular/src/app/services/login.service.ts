import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { catchError } from 'rxjs/operators';
import { User } from '../shared/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  login(user : User) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    };
    return this.http.post( baseURL + 'users/login', user, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));;
  }
}
