import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { LandingService } from '../landing-page/landing.service'
import { LoggerService } from '../logger-service.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private LandingService: LandingService, private loggerService: LoggerService) { }

  tableData: any;
  isCollapsed = false;
  tableDataIndex = [];
  addFlag = false;
  addDataRow = {
    "type":"",
    "Name":"",
    "Title":"",
    "Phone":"",
    "Ext.":"",
    "Fax":"",
    "Email":""
  }
  ngOnInit() {
      this.LandingService.getTableData()
        .subscribe((data) => {
            this.tableData = data;
        },(data) => {
          this.LandingService.getTableDataOnFailure()
        .subscribe((failureData) => {
            this.tableData = failureData;
          });
      });
    
  }

  getIndex = function(index){
    if(this.tableDataIndex.indexOf(index) == -1){
      this.tableDataIndex.push(index);
    }else{
      this.tableDataIndex.splice(this.tableDataIndex.indexOf(index), 1);
    }
  }

  deleteSelectedRows = function(){
    //logic to remove data from table
    for (var i = this.tableData.length - 1; i >= 0 ; i--){
      if(this.tableDataIndex.indexOf(i) != -1){
        this.loggerService.warn("Row deleted" + JSON.stringify(this.tableData[i]));
        this.tableData.splice(i, 1);
      }
    }
    this.tableDataIndex = [];

    //
   
  }

  addRows = function(){
    this.tableData.push(this.addDataRow);
    this.addFlag = true;
    this.loggerService.info("Blank row created" + JSON.stringify(this.addDataRow));
  }

  saveRows = function(){
    this.addFlag = false;    
    this.loggerService.log("row created" + JSON.stringify(this.tableData[this.tableData.length - 1]));
  }

  toggleIsCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
}
