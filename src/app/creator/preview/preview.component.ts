import { Component, OnInit, Input } from '@angular/core';
import { CV } from 'src/app/model/data';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input() cv : CV;

  constructor() { }


}
