import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  AppURL = AppURL

  constructor() { }

  ngOnInit() {
  }

}
