import { Component, OnInit } from '@angular/core';
import {FbsService} from 'app/services/fbs.service'

@Component({
  selector: 'app-assistentes ',
  templateUrl: './assistentes.component.html',
  styleUrls: ['./assistentes.component.css'],
   host: {'class': 'blue accent-1'}
})
export class AssistentesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
