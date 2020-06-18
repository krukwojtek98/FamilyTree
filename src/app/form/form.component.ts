import { Component } from '@angular/core';

import { FamilyMember } from '../family-member';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Relation } from '../relation';
import { TargetMember } from '../target-member';
import { variable } from '@angular/compiler/src/output/output_ast';
import { NewTreeService } from '../new-tree.service';
import { first } from 'rxjs/operators';

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

  constructor(private _formBuilder: FormBuilder, private newTree: NewTreeService) { }


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
    this.onlyNames.push(this.model.name);
    console.log(this.onlyNames);
  }

  onSubmit() {
    this.submitted = true;
  }

  newFamilyMember() {
    if (this.model.name !== null && this.model.name !== '') {
      this.add();
      this.index = this.index + 1;
      this.model = new FamilyMember(this.index, '', '');
      // this.onlyNames.push(this.model.name);

    }
    console.log(this.FamilyList);
    // console.log('names:' + this.onlyNames);
  }



  relation = new Relation(0, 1, '');

  relations: Array<Relation> = [];


  newRelation() {
    if (this.relation.relation !== null && this.relation.relation !== '') {
      this.relations.push(this.relation);
      this.relation = new Relation(0, 1, '');
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

    this.jsonString = JSON.stringify(this.title);
    this.jsonString += JSON.stringify(this.onlyNames);
    this.jsonString += JSON.stringify(this.relations);
    console.log(this.jsonString);
    this.newTree.sendTree(this.jsonString).pipe(first()).subscribe(
      data => {
        console.log("Wysłano drzewo");
      },
      err => {
      });
  }

  // TODO: Remove this when we're done
  //  get diagnostic() { return JSON.stringify(this.model); }
}
