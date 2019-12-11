import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-amphur',
  templateUrl: './amphur.component.html',
  styleUrls: ['./amphur.component.css']
})
export class AmphurComponent implements OnInit {

  private params = [{
    type: '',
    status: ''
  }]

  // private param = 1;
  status = ['', 'ทั้งหมด', 'ผ่าน', 'มีแนวโน้ม', 'ไม่ผ่าน']
  type = ['', 'ตัวชี้วัดหนึ่ง', 'ตัวชี้วัดสอง', 'ตัวชี้วัดสาม', 'ตัวชี้วัดสี่']
  header = []

  constructor(
    private activateRoute: ActivatedRoute
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
  }
}
