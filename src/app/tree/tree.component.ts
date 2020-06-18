import { Component, OnInit } from '@angular/core';
import { TreeService } from '../services/tree/tree.service';
import { first } from 'rxjs/operators';
import { Network, DataSet, Node, Edge } from 'vis';
import { Router } from '@angular/router';

import realtionsConfig from '../../utils/relationsConfig.js';
import networkConfig from '../../utils/networkConfig.js';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class TreeComponent implements OnInit {

  tree = {}
  treeName: String
  network: Network
  options = networkConfig

  constructor(private treeService: TreeService, private router: Router) { }

  ngOnInit(): void {
    if(this.treeService.treeId == undefined){
      this.router.navigate(['/listoftree']);
    }
    else{
      this.treeService.getTree().pipe(first()).subscribe(data => {
        this.tree = data
        this.treeName = this.tree['name']
        const familyTreeGraphElement = this.getFamilyTreeGraphElement();
        const treeGraph = this.createGraphData(this.tree);
        this.network = new Network(familyTreeGraphElement, treeGraph);
        this.network.setOptions(this.options);
      });
    }
  }

  private getFamilyTreeGraphElement() {
    return document.getElementById('familyTreeGraph');
  };

  private createNodes(data){
    let nodes : Node[] = []
    const members = data['members']
    members.forEach( (member) => {
        let node = {id : member['id'], label : member['name']}
        nodes.push(node)        
    });
    return nodes
  };

  private createEdges(data){
    let edges : Edge[] = []
    const relations = data["relations"]
    relations.forEach( (relation) => {
      let edge = {from : relation["sourceMemberId"], to : relation["targetMemberId"], label : realtionsConfig[relation["relationType"]]}
        edges.push(edge)
    })
    return edges;
  };

  private createGraphData(data) {
    const members = this.createNodes(data)
    const relations = this.createEdges(data)

    const nodes : DataSet<Node> = new DataSet(members);
    const edges : DataSet<Edge> = new DataSet(relations);

    const treeGraphData = {
      nodes: nodes,
      edges: edges
    };

    return treeGraphData;
  };
}
