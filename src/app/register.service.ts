import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registration( email: EmailValidator,nickname: string, password: string) {
    let data ={
      email: email,
      Nick:nickname,
      password:password
    }
     return this.http.post<any>(`${environment.apiUrl}`+ '/api/auth/register',data,{headers: new HttpHeaders({ 
      'Content-Type':'application/json'}),
      responseType: 'json'});
 }
}
