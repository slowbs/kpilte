import { Component, OnInit, OnDestroy } from '@angular/core';
import { KpiService, QofDist } from '../../kpi.service';
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
  header = []
  public qofDistItem: QofDist[] = []
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
        console.log(this.qofDistItem)
      },
        excep => {
          // alert(excep.error.message),
          this.router.navigate(['/index'])
        }
      )

    this.dtOptions = {
      pageLength: 50
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
