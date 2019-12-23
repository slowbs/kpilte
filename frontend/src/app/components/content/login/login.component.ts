import { Component, OnInit } from '@angular/core';
import { KpiService, ILogin } from '../../kpi.service';
import { Router } from '@angular/router';
// declare const App:any;
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public modelInsert: ILogin = {
    username: '',
    password: '',
    remember: true
  }

  constructor(
    private kpiService: KpiService,
    private router: Router
  ) { }

  ngOnInit() {
    // App.initialLoadPage()
    this.loadScript()
  }

  loadScript() {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  }

  onSubmit() {
    // console.log(this.modelInsert)
    this.kpiService.postLogin(this.modelInsert)
      .subscribe(result => {
        console.log(result['message']),
        this.router.navigate(['/idnex'])
      },
        // excep => console.log(excep.error)
        excep => alert(excep.error.message)
      )
  }

}
