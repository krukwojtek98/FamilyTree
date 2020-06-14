import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  tree = {  
    "id": 19,
    "name": "Testowe",
    "members": [
      {
        "id": 163,
        "name": "Jan Kowalski"
      },
      {
        "id": 164,
        "name": "Bogusław Linda"
      },
      {
        "id": 165,
        "name": "Angelina Jolie"
      },
      {
        "id": 166,
        "name": "Krystyna Janda"
      },
      {
        "id": 167,
        "name": "Marcin Prokop"
      },
      {
        "id": 168,
        "name": "Jack Sparrow"
      },
      {
        "id": 169,
        "name": "Justyna Kowalczyk"
      },
      {
        "id": 170,
        "name": "Dorota Welman"
      },
      {
        "id": 171,
        "name": "Donald Trump"
      }
    ],
    "relations": [
      {
        "id": 127,
        "sourceMemberId": 163,
        "sourceMember": {
          "id": 163,
          "name": "Jan Kowalski"
        },
        "targetMemberId": 167,
        "targetMember": {
          "id": 167,
          "name": "Marcin Prokop"
        },
        "relationType": 2
      },
      {
        "id": 128,
        "sourceMemberId": 168,
        "sourceMember": {
          "id": 168,
          "name": "Jack Sparrow"
        },
        "targetMemberId": 163,
        "targetMember": {
          "id": 163,
          "name": "Jan Kowalski"
        },
        "relationType": 1
      },
      {
        "id": 129,
        "sourceMemberId": 165,
        "sourceMember": {
          "id": 165,
          "name": "Angelina Jolie"
        },
        "targetMemberId": 168,
        "targetMember": {
          "id": 168,
          "name": "Jack Sparrow"
        },
        "relationType": 0
      },
      {
        "id": 130,
        "sourceMemberId": 170,
        "sourceMember": {
          "id": 170,
          "name": "Dorota Welman"
        },
        "targetMemberId": 163,
        "targetMember": {
          "id": 163,
          "name": "Jan Kowalski"
        },
        "relationType": 0
      },
      {
        "id": 131,
        "sourceMemberId": 169,
        "sourceMember": {
          "id": 169,
          "name": "Justyna Kowalczyk"
        },
        "targetMemberId": 170,
        "targetMember": {
          "id": 170,
          "name": "Dorota Welman"
        },
        "relationType": 0
      },
      {
        "id": 132,
        "sourceMemberId": 164,
        "sourceMember": {
          "id": 164,
          "name": "Bogusław Linda"
        },
        "targetMemberId": 170,
        "targetMember": {
          "id": 170,
          "name": "Dorota Welman"
        },
        "relationType": 1
      },
      {
        "id": 133,
        "sourceMemberId": 171,
        "sourceMember": {
          "id": 171,
          "name": "Donald Trump"
        },
        "targetMemberId": 168,
        "targetMember": {
          "id": 168,
          "name": "Jack Sparrow"
        },
        "relationType": 1
      }
    ]
  };

  constructor() {}

  get_tree() {
    return of(this.tree);
  }
}
