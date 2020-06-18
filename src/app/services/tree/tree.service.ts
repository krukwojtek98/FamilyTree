import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../../model/basicUser.model';
import { LoginService } from '../../login-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  treeId: string

  constructor(private loginService: LoginService, private http: HttpClient) {}

  getTree() {
    let user: User;
    this.loginService.currentUser.subscribe( (data) => {
      user = data
    } );
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',
                                      'Accept': 'application/json',
                                      'Authorization': `Bearer ${user['token']}`});
    return this.http.get<any>(`${environment.apiUrl}` +`/api/trees/${this.treeId}`, {headers: headers})
  }

  setTreeId(treeId: string) {
    this.treeId = treeId
  }
}
