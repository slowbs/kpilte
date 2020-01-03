import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService, QofClient } from '../../kpi.service';
import { AppURL } from '../../../app.url';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qclient',
  templateUrl: './qclient.component.html',
  styleUrls: ['./qclient.component.css']
})
export class QclientComponent implements OnDestroy, OnInit {

  AppURL = AppURL
  type = ['', 'ตัวชี้วัด QOF กลาง (ประเทศ)', 'ตัวชี้วัด QOF เขต', 'ตัวชี้วัด ค่า K จังหวัด', 'ตัวชี้วัด PPA']
  public header: [] = []
  public qofClientItem = []
  private dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  public params = [{
    type: '',
    kpi_id: '',
    hmain: ''
  }]

  constructor(
    private kpiService: KpiService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['kpi_id'] = queryParam.kpi_id
      this.params['hmain'] = queryParam.hmain
      // this.params['status'] = queryParam.status
      console.log(this.params['type'], this.params['kpi_id'], this.params['hmain'])
    })
  }

  ngOnInit() {
    this.kpiService.getQofClient(this.params['type'], this.params['kpi_id'], this.params['hmain'])
      .subscribe(result => {
        this.dtTrigger.next()
        this.qofClientItem = result['result']
        this.header = result['result2']
        this.header['type'] = this.type[this.params['type']]
        // console.log(this.qofClientItem)
      },
        excep => alert(excep.error.message))
    // this.header = [{
    //   'type': this.type[this.params['type']]
    // }]
    this.dtOptions = {
      pageLength: 50
    };
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
