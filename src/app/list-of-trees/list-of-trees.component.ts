import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';
import { TreesListService } from '../trees-list.service';
import { merge} from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import {Tree} from 'src/app/model/getUser.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-trees',
  templateUrl: './list-of-trees.component.html',
  styleUrls: ['./list-of-trees.component.css']
})
export class ListOfTreesComponent implements OnInit {

  constructor(private loginService: LoginService, private treesList: TreesListService, private http:HttpClient) { }

  Trees: Tree[] = [];
  showButtons: boolean = false;

  ngOnInit(): void {

    
    this.getTrees();

    // this.treesList.showList(id).pipe(first()).subscribe(
    //   data => {
    //     this.Trees = data;
    //     console.log("Drzewa" + this.Trees);
    //     console.log(this.Trees[0].name);
    //   },
    //   err => {
    //   });
  }

  getTrees() {
    let id = this.loginService.currentUserValue.userId;
    this.treesList = new TreesListService(this.http);

      merge().pipe()
        .pipe(
          startWith({}),
          switchMap(() => {
            return this.treesList.showList(id);
          }),
          map(data => {
            console.log(data);
            return data.trees;
          }))
          .subscribe(
            data => {
              this.Trees = data;
              console.log(this.Trees[0].name);
              this.showButtons = true;
            }
          );
  }

}
