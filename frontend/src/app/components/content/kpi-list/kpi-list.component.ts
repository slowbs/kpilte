import { Component, OnInit } from '@angular/core';
import { KpiService, Kpi } from '../../kpi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.css']
})
export class KpiListComponent implements OnInit {

  public kpiItem: any[] = [];
  private params = [{
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
        this.kpiItem = result['result']
        console.log(this.kpiItem)
      },
        excep => alert(excep.error.message))
  }

}
