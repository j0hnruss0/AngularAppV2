import { Component, OnInit } from '@angular/core';
import { Character } from "../ExampleObjects";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  character: Character = {
    id: 1,
    name: "Charles"
  };

  constructor() { }

  ngOnInit() {
  }

}
