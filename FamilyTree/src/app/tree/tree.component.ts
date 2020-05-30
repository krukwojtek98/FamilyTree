import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TreeService } from '../services/tree/tree.service';
import { Network, DataSet, Node, Edge } from 'vis';

import realtionsConfig from '../../utils/relationsConfig.js';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})

export class TreeComponent implements OnInit, AfterViewInit {

  tree = {}
  options = {physics:{enabled:false}};  

  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
    this.treeService.get_tree().subscribe(res => {
      this.tree = res;
    })
  }

  ngAfterViewInit() :void {
    const familyTreeGraphElement = this.getFamilyTreeGraphElement();
    const treeGraph = this.createGraphData(this.tree);
    const network :Network = new Network(familyTreeGraphElement, treeGraph, this.options);
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
