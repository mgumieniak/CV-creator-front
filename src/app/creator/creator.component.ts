import { Component, OnInit } from '@angular/core';
import { MaterialModule} from '../MaterialModule'
import { from } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
