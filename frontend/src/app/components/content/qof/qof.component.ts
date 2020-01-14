import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppURL } from '../../../app.url'
import { KpiService, Qof } from '../../kpi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-qof',
  templateUrl: './qof.component.html',
  styleUrls: ['./qof.component.css']
})
export class QofComponent implements OnDestroy, OnInit {

  AppURL = AppURL
  type = ['', 'ตัวชี้วัด QOF กลาง (ประเทศ)', 'ตัวชี้วัด QOF เขต', 'ตัวชี้วัด ค่า K จังหวัด', 'ตัวชี้วัด PPA']
  header = []
  public qofItem: Qof[] = []
  objectKeys = Object.keys;

  private dtTrigger: Subject<any> = new Subject<any>();
  public params = [{
    type: ''
  }]

  constructor(
    private kpiSerivce: KpiService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      // console.log(this.params['type'])
    })
  }

  ngOnInit() {
    this.kpiSerivce.getQof(this.params['type'])
      .subscribe(result => {
        this.dtTrigger.next()
        this.qofItem = result['result']
        // console.log(this.qofItem)
      },
        excep => alert(excep.error.message)
      )
    this.header = [{
      'type': this.type[this.params['type']]
    }]
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  unsorted() { }

}
