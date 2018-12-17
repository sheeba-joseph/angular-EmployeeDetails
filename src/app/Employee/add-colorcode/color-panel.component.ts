import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.css']
})
export class ColorPanelComponent implements OnInit {


  @Input() name: string;
  @Input() color: string;




  constructor() { }

  ngOnInit() {
    console.log('ngOnInit Color Panel');
  }



}
