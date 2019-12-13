import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService, Kpi } from '../../kpi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, from } from 'rxjs';
import { AppURL } from '../../../app.url'

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.css']
})
export class KpiListComponent implements OnDestroy, OnInit {

  AppURL = AppURL
  private dtTrigger: Subject<any> = new Subject<any>();
  public kpiItem: any[] = [];
  public params = [{
    type: '',
    status: ''
  }]

  constructor(
    private activateRoute: ActivatedRoute,
    private kpiService: KpiService
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['status'] = queryParam.status
      // console.log(this.params['type'], this.params['status'])
    })
  }

  ngOnInit() {
    this.kpiService.getKpiList(this.params['type'], this.params['status'])
      .subscribe(result => {
        this.dtTrigger.next();
        this.kpiItem = result['result']
        console.log(this.kpiItem)
      },
        excep => alert(excep.error.message)
        // excep => console.log(excep.error.message)
      )
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
