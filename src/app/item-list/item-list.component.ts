import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { DataService } from "../data.service";
import { Job } from "../ExampleObjects";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  products = products;
  allJobs: Job[];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  };

  constructor(private dataServe: DataService) {}

  ngOnInit() {
    this.dataServe.getData()
      //.subscribe(data=> console.log(data))
      .subscribe(data=> this.allJobs = data.jobs)
  }

}
