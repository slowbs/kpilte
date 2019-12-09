import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url';

@Component({
  selector: 'app-headerfull',
  templateUrl: './headerfull.component.html',
  styleUrls: ['./headerfull.component.css']
})
export class HeaderfullComponent implements OnInit {

  AppURL = AppURL;

  constructor() { }

  ngOnInit() {
  }

}
