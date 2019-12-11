import { Injectable } from '@angular/core';
import { backendURL } from '../app.url'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KpiService {



  private backendAPI: string = environment.production ?
    // 'http://61.19.202.217/modbudget/backend/api' :
    'http://192.168.5.104/modbudget/backend/api' :
    `${backendURL}/api/`;

  constructor(
    private httpClient: HttpClient
  ) { }


}
