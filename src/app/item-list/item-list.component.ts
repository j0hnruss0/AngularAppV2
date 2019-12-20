import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  clearData: any =[];
  filtered = false;
  searchParam: string;
  searchId: string;
  jobSearch = new FormControl();
  filteredOptions: Observable<any>;

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

    this.dataServe.getEasyData()
      .subscribe(res=> this.clearData = res.jobs)

    this.filteredOptions = this.jobSearch.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  beginFilter(query) {
    if (this.filtered === false) {
      this.filtered = true;
      this.searchParam = query;
    } else {
      this.searchParam = query;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.clearData.filter(option => option.data.title.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log(this.clearData)
    if (this.filtered === false) {
      this.filtered = true;
      this.searchParam = this.jobSearch.value;
    } else {
      this.searchParam = this.jobSearch.value;
    }
    
  }

}
