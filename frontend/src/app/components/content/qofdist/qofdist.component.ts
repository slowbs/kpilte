import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService, QofDist, Header } from '../../kpi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppURL } from '../../../app.url'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-qofdist',
  templateUrl: './qofdist.component.html',
  styleUrls: ['./qofdist.component.css']
})
export class QofdistComponent implements OnDestroy, OnInit {

  AppURL = AppURL
  type = ['', 'ตัวชี้วัด QOF กลาง (ประเทศ)', 'ตัวชี้วัด QOF เขต', 'ตัวชี้วัด ค่า K จังหวัด', 'ตัวชี้วัด PPA']
  public qofDistItem: QofDist[] = []
  public header:[] = []
  private dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  public params = [{
    type: '',
    kpi_id: ''
  }]

  constructor(
    private kpiService: KpiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['kpi_id'] = queryParam.kpi_id
      // console.log(this.params['type'], this.params['kpi_id'])
    })
  }

  ngOnInit() {
    this.kpiService.getQofDist(this.params['type'], this.params['kpi_id'])
      .subscribe(result => {
        this.dtTrigger.next()
        this.qofDistItem = result['result']
        this.header = result['result2']
        this.header['type'] = this.type[this.params['type']]
        // console.log(this.qofDistItem, this.header)
      },
        excep => {
          // alert(excep.error.message),
          this.router.navigate(['/index'])
        }
      )
    // this.header = [{
    //   'type'= this.type[this.params['type']]
    // }]
    // this.header = {
    //   'type': this.type[this.params['type']]
    // }
    this.dtOptions = {
      pageLength: 50
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
