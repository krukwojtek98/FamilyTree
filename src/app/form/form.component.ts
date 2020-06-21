import { Component } from '@angular/core';

import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../relation';
import { TargetMember } from '../target-member';
import { variable } from '@angular/compiler/src/output/output_ast';
import { NewTreeService } from '../new-tree.service';
import { first } from 'rxjs/operators';

import { Name } from '../name';

import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login-service.service';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FamilyMemberClassComponent implements OnInit {

  index: number = 0;
  regTitle: string = "[A-Za-z]{2,20}";

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  jsonString: string;
  onlyNames = new Array();

  constructor(private _formBuilder: FormBuilder, private newTree: NewTreeService, private loginService: LoginService,
    private router: Router) { }

  names: Array<Name> = [];

  
  FamilyList: Array<FamilyMember> = [];
  familyNumber: number;
  familynumberList: Array<number> = [];

  myimage: string = 'assets/tree.png';

  relationType = ['mother', 'father', 'brother', 'sister'];


  model = new FamilyMember(this.index, '', '');

  title: string = '';

  saveTitle() {
    this.title = this.title;
    console.log(this.title);
  }
  submitted = false;

  add() {
    this.FamilyList.push(this.model);
    console.log(this.model);
    this.names.push(new Name(this.model.Name));

    console.log(this.onlyNames);
  }

  onSubmit() {
    this.submitted = true;
  }

  newFamilyMember() {
    if (this.model.Name !== null && this.model.Name !== '') {
      this.add();
      this.index = this.index + 1;
      this.model = new FamilyMember(this.index, '', '');
      // this.onlyNames.push(this.model.name);

    }
    console.log(this.FamilyList);
    // console.log('names:' + this.onlyNames);
  }



  relation = new Relation(0, 1, 0);

  relations: Array<Relation> = [];


  newRelation() {
    if (this.relation.RelationType !== null) {
      this.relation.SourceMemberIndex = Number(this.relation.SourceMemberIndex)
      this.relation.TargetMemberIndex = Number(this.relation.TargetMemberIndex)
      this.relation.RelationType = Number(this.relation.RelationType)
      this.relations.push(this.relation);
      this.relation = new Relation(0, 1, 0);
    }

    console.log(this.relations);
  }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

  submitFamily() {

    let id = this.loginService.currentUserValue.userId;

    this.jsonString=JSON.stringify({userId: id, Name: this.title, Members: this.names, Relations: this.relations});

    this.newTree.sendTree(this.jsonString).pipe(first()).subscribe(
      data => {
        console.log(data);
        window.alert("Twoje drzewo zostało utworzone!")
        this.router.navigate(['/listoftrees']);
      },
      err => {
      });
  }

  // TODO: Remove this when we're done
  //  get diagnostic() { return JSON.stringify(this.model); }
}
