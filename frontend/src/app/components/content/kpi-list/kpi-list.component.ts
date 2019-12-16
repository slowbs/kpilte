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

  status = ['', 'ทั้งหมด', 'ผ่าน', 'มีแนวโน้ม', 'ไม่ผ่าน']
  type = ['', 'ตัวชี้วัดหนึ่ง', 'ตัวชี้วัดสอง', 'ตัวชี้วัดสาม', 'ตัวชี้วัดสี่']
  header = []

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
        console.log(this.header)
      },
        excep => alert(excep.error.message)
        // excep => console.log(excep.error.message)
      )

    this.header = [{
      'type': this.type[this.params['type']],
      'status': this.status[this.params['status']],
    }]
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
