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

  private backendKpi: string = this.backendAPI + '/kpi';
  private backendKpiList: string = this.backendAPI + '/kpi-list';

  constructor(
    private httpClient: HttpClient
  ) { }

  getKpi() {
    return this.httpClient.get<Kpi[]>(this.backendKpi);
  }

  getKpiList(type: any, status: any) {
    return this.httpClient.get<Kpi[]>(this.backendKpiList, { params: { type, status } });
  }

}

export interface Kpi {
  id: string,
  name: string,
  kpi_id: string,
  value?: string,
  type: string,
  par: string
}

export interface Amphur {
  id: string,
  changwatcode: string,
  amphurcode: string,
  amphur_name: string
}
