import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KpiService, Amphur } from '../../kpi.service';
import { Subject } from 'rxjs';
declare const $: any;

@Component({
  selector: 'app-amphur',
  templateUrl: './amphur.component.html',
  styleUrls: ['./amphur.component.css']
})
export class AmphurComponent implements OnInit {
  
  private dtTrigger: Subject<any> = new Subject<any>();
  private params = [{
    type: '',
    status: ''
  }]

  public amphurItem: Amphur[] = [];

  // private param = 1;
  status = ['', 'ทั้งหมด', 'ผ่าน', 'มีแนวโน้ม', 'ไม่ผ่าน']
  type = ['', 'ตัวชี้วัดหนึ่ง', 'ตัวชี้วัดสอง', 'ตัวชี้วัดสาม', 'ตัวชี้วัดสี่']
  header = []

  constructor(
    private activateRoute: ActivatedRoute,
    private kpiService: KpiService
  ) {
    this.activateRoute.params.forEach(queryParam => {
      this.params['type'] = queryParam.type
      this.params['status'] = queryParam.status
    })
  }

  ngOnInit() {

    // console.log(this.status[this.params['status']])
    // console.log({ header : {
    //   'type' : this.type[this.params['type']],
    //   'status' : this.status[this.params['status']]
    // }})

    this.header = [{
      'type': this.type[this.params['type']],
      'status': this.status[this.params['status']]
    }]

    // console.log({
    //   'type' : this.status[this.params['type']],
    //   'status' : this.status[this.params['status']]
    // })

    this.kpiService.getKpi()
      .subscribe(result => {
        this.amphurItem = result
        this.dtTrigger.next();
        console.log(this.amphurItem)
        console.log(this.header)
      },
        excep => alert(excep.error.message))
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
