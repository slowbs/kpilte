import { Component, OnInit } from '@angular/core';
import { KpiService, Client } from '../../kpi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { AppURL } from '../../../app.url'


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  AppURL = AppURL

  status = ['', 'ทั้งหมด', 'ผ่าน', 'มีแนวโน้ม', 'ไม่ผ่าน']
  type = ['', 'ตัวชี้วัดหนึ่ง', 'ตัวชี้วัดสอง', 'ตัวชี้วัดสาม', 'ตัวชี้วัดสี่']
  header = []

  private dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  public clientItem: Client[] = []
  public params = [{
    type: '',
    status: '',
    kpi_id: '',
    amphurcode: ''
  }]

  constructor(
    private kpiService: KpiService,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['status'] = queryParam.status
      this.params['kpi_id'] = queryParam.kpi_id
      this.params['amphurcode'] = queryParam.amphurcode
    })
  }

  ngOnInit() {


    this.kpiService.getClient(this.params['type'], this.params['status'], this.params['kpi_id'], this.params['amphurcode'])
      .subscribe(result => {
        this.clientItem = result['result']
        this.header = [{
          'type': this.type[this.params['type']],
          'status': this.status[this.params['status']],
          'kpi_id': this.params['kpi_id'],
          'kpi_name': result['result2']['0']['name'],
          'amphur_name': result['result2']['0']['amphur_name']
        }]
        this.dtTrigger.next()
        // console.log(this.clientItem)
        // console.log(this.header)
      },
        excep => alert(excep.error.message))
    // console.log(this.params)

    this.dtOptions = {
      pageLength: 25
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
