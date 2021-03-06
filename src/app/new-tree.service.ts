import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login-service.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { User } from './model/basicUser.model';

@Injectable({
  providedIn: 'root'
})
export class NewTreeService {

  constructor(private http: HttpClient) { }

  sendTree(json: string) {
     return this.http.post<any>(`${environment.apiUrl}`+ '/api/trees',json,{headers: new HttpHeaders({ 
         'Content-Type':'application/json'}),responseType: 'json'});
 }
}
