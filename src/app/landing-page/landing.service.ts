import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  dataUrl = 'abc/this-call-will-fail';
  MockUrl = 'src/mock/tableData.json'

  getTableData() {
    return this.http.get(this.dataUrl);
  }

  getTableDataOnFailure() {
    return this.http.get(this.MockUrl);
  }

  addData() {

  }

  deleteData() {
    
  }

}
