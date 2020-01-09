import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../kpi.service';
import { AppURL } from '../../../app.url'

@Component({
  selector: 'app-searchqof',
  templateUrl: './searchqof.component.html',
  styleUrls: ['./searchqof.component.css']
})
export class SearchqofComponent implements OnInit {

  AppURL = AppURL
  public getSearchItem: any[]
  constructor(
    private kpiService: KpiService
  ) {
    this.kpiService.getResults$()
      .subscribe(result => {
        this.getSearchItem = result
        // console.log(this.getSearchItem)
      });
  }

  ngOnInit() {
    // this.kpiService.getSearchQof()
    //   .subscribe(result => {
    //     this.getSearchItem = result['result']
    //     console.log(this.getSearchItem)
    //   },
    //     excep => alert(excep.error.message))
    // console.log(this.getSearchItem)
    // this.kpiService.getResults$()
    //   .subscribe(results => this.getSearchItem = results)
    // console.log(this.getSearchItem)
  }

}
