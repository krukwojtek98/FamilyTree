import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login-service.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class NewTreeService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  //TODO: Get userId from localStorage and add to url
  sendTree(json: string) {
     return this.http.post<any>(`${environment.apiUrl}`+ '/api/trees',json,{headers: new HttpHeaders({ 
         'Content-Type':'application/json'}),responseType: 'json'});
 }
}
