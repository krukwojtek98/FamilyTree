import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';
import { TreesListService } from '../trees-list.service';
import { TreeService } from '../services/tree/tree.service';
import { Router } from '@angular/router';
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

  constructor(private loginService: LoginService, private treesList: TreesListService, private http:HttpClient, private treeService: TreeService, private router: Router) { }

  Trees: Tree[] = [];
  showButtons: boolean = false;
  loadSpinner: boolean;

  ngOnInit(): void {
    this.loadSpinner = true;
    this.getTrees();
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
            return data.trees;
          }))
          .subscribe(
            data => {
              this.loadSpinner = false;
              this.Trees = data;
              this.showButtons = true;
            }
          );
  }

  goToTree(treeId: string) {
    this.treeService.setTreeId(treeId);
    this.router.navigate(['/tree']);
  }

}
