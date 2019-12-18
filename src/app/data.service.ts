import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Job } from "./ExampleObjects"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = "https://testapi.io/api/crimsonsunset/code-challenge-jobs";

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<Job[]>(this.apiUrl);
  }

  getEasyData(): Observable<any> {
    return this._http.get(this.apiUrl);
  }
}
