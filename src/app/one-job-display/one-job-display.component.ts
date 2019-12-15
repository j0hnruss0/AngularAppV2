import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-job-display',
  templateUrl: './one-job-display.component.html',
  styleUrls: ['./one-job-display.component.scss']
})
export class OneJobDisplayComponent implements OnInit {

  @Input() job;

  constructor() { }

  ngOnInit() {
    
  }

}
