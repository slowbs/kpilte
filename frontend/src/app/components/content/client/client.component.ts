import { Component, OnInit } from '@angular/core';
import { KpiService, Client } from '../../kpi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

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
        this.dtTrigger.next()
        this.clientItem = result['result']
        console.log(this.clientItem)
      },
        excep => alert(excep.error.message))
    console.log(this.params)

    this.dtOptions = {
      pageLength: 25
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
