import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url'
import { KpiService, Kpi } from '../../kpi.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // status = [{
  //   '1' : 'ทั้งหมด',
  //   '2' : 'ผ่าน',
  //   '3' : 'มีแนวโน้ม',
  //   '4' : 'ไม่ผ่าน'
  // }]
  public kpiItem1: Kpi[] = [];
  public kpiItem2: Kpi[] = [];
  public kpiItem3: Kpi[] = [];
  public kpiItem4: Kpi[] = [];

  AppURL = AppURL

  constructor(
    private kpiService: KpiService
  ) { }

  ngOnInit() {
    this.kpiService.getKpi()
      .subscribe(result => {
        this.kpiItem1 = result['result1']
        this.kpiItem2 = result['result2']
        this.kpiItem3 = result['result3']
        this.kpiItem4 = result['result4']
      },
        excep => alert(excep.error.message))
  }

}

