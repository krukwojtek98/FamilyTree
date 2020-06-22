import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Tree, GetUser} from 'src/app/model/getUser.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreesListService {

  constructor(private http: HttpClient) { }

  showList(id: string) :Observable<GetUser>{
     return this.http.get<GetUser>(`${environment.apiUrl}`+ '/api/user/'+id,{headers: new HttpHeaders({ 
         'Content-Type':'application/json'}),responseType: 'json'});
 }
}
