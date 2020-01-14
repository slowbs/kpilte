import { Component, OnInit } from '@angular/core';
import { AppURL, backendURL } from '../../../app.url';
import { KpiService, Profile } from '../../kpi.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerfull',
  templateUrl: './headerfull.component.html',
  styleUrls: ['./headerfull.component.css']
})
export class HeaderfullComponent implements OnInit {

  public profileItem: Profile[] = [];
  public modelSearch: any = {
    'kpi_name': ''
  }
  public searchQofItem: []

  AppURL = AppURL;

  constructor(
    private kpiService: KpiService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.kpiService.getLogin()
      .subscribe(result => {
        this.profileItem = result
        // console.log(this.profileItem)
      },
        excep => console.log(excep.error))
  }

  /** ออกจากระบบ */
  // public onLogout() {
  //   //console.log('Logout')
  //   this.httpClient
  //     .post(`${backendURL}/api/logout`, null)
  //     .subscribe(
  //       // result => {
  //       //   console.log(result)
  //       // },
  //       // result => this.router.navigate(['/index']),
  //       // result => console.log(result),
  //       // except => alert(except.error.message)
  //       result => {
  //         console.log(result),
  //         this.router.navigate['/index'],
  //         this.ngOnInit()
  //       },
  //       excep => console.log(excep.error)
  //     )
  // }

  onLogout() {
    this.kpiService.postLogout()
      .subscribe(result => {
        // console.log(result)
        this.router.navigate(['/index'])
        this.ngOnInit()
      },
        excep => console.log(excep.error))
  }

  onSearchSubmit() {
    // console.log(this.modelSearch)
    this.kpiService.getSuggestion(this.modelSearch)
    this.router.navigate(['/searchqof'])
  }

}
