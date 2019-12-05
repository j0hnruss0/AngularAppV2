import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-alert',
  templateUrl: './item-alert.component.html',
  styleUrls: ['./item-alert.component.scss']
})
export class ItemAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
