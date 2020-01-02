import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService } from '../../kpi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AppURL } from '../../../app.url'

@Component({
  selector: 'app-qofinfo',
  templateUrl: './qofinfo.component.html',
  styleUrls: ['./qofinfo.component.css']
})
export class QofinfoComponent implements OnDestroy, OnInit {

  AppURL = AppURL
  type = ['', 'ตัวชี้วัด QOF กลาง (ประเทศ)', 'ตัวชี้วัด QOF เขต', 'ตัวชี้วัด ค่า K จังหวัด', 'ตัวชี้วัด PPA']
  header = []
  public qofInfoItem = []
  private dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  public params = []

  constructor(
    private kpiService: KpiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['kpi_id'] = queryParam.kpi_id
      this.params['hmain'] = queryParam.hmain
      this.params['hospcode'] = queryParam.hospcode
      this.params['status'] = queryParam.status
      // this.params['status'] = queryParam.status
      // console.log(this.params['type'], this.params['kpi_id'], this.params['hmain'],
      //   this.params['hospcode'], this.params['status'])
    })
  }

  ngOnInit() {
    this.kpiService.getQofInfo(this.params['type'], this.params['kpi_id'], this.params['hmain'], this.params['hospcode'], this.params['status'])
      .subscribe(result => {
        this.dtTrigger.next()
        this.qofInfoItem = result['result']
        console.log(this.qofInfoItem)
      },
        excep => {
          alert(excep.error.message)
          this.router.navigate(['/'])
        })
    // excep => console.log(excep.error.message))
    this.header = [{
      'type': this.type[this.params['type']]
    }]
    this.dtOptions = {
      pageLength: 25
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
