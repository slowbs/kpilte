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
  private backendQof: string = this.backendAPI + '/qof';
  private backendQofDist: string = this.backendAPI + '/qofdist';
  private backendQofClient: string = this.backendAPI + '/qofclient';
  private backendQofInfo: string = this.backendAPI + '/qofinfo';
  private backendKpiList: string = this.backendAPI + '/kpi-list';
  private backendAmphur: string = this.backendAPI + '/amphur';
  private backendClient: string = this.backendAPI + '/client';
  private backendLogin: string = this.backendAPI + '/login';
  private backendLogout: string = this.backendAPI + '/logout';

  constructor(
    private httpClient: HttpClient
  ) { }

  getKpi() {
    return this.httpClient.get<Kpi[]>(this.backendKpi);
  }

  getKpiList(type: any, status: any) {
    return this.httpClient.get<Kpi[]>(this.backendKpiList, { params: { type, status } });
  }

  getAmphur(type: any, status: any, kpi_id: any) {
    return this.httpClient.get<Amphur[]>(this.backendAmphur, { params: { type, status, kpi_id } })
  }

  getClient(type: any, status: any, kpi_id: any, amphurcode: any) {
    return this.httpClient.get<Client[]>(this.backendClient, { params: { type, status, kpi_id, amphurcode } })
  }

  getQof(type: any) {
    return this.httpClient.get<Qof[]>(this.backendQof, { params: { type } })
  }

  getQofDist(type: any, kpi_id: any) {
    return this.httpClient.get<QofDist[]>(this.backendQofDist, { params: { type, kpi_id } })
  }

  getQofClient(type: any, kpi_id: any, hmain: any) {
    return this.httpClient.get<QofClient[]>(this.backendQofClient, { params: { type, kpi_id, hmain } })
  }

  getQofInfo(type: any, kpi_id: any, hmain: any, hospcode: any, status: any) {
    return this.httpClient.get<QofInfo[]>(this.backendQofInfo, { params: { type, kpi_id, hmain, hospcode, status } })
  }


  // Account
  postLogin(value: ILogin) {
    return this.httpClient.post<ILogin[]>(this.backendLogin, value)
  }

  getLogin() {
    return this.httpClient.get<Profile[]>(this.backendLogin)
  }

  postLogout() {
    return this.httpClient.post(this.backendLogout, null)
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

export interface Client {
  id: string,
  amphurcode: string,
  hospcode: string,
  hospname: string
}

export interface Qof {
  id: string,
  kpi_id: string,
  kpi_name: string,
  type: string,
  operator: string,
  par: string,
  a: string,
  b: string,
  c?: string,
  d?: string
}

export interface ILogin {
  username: string,
  password: string,
  remember: boolean
}

export interface Profile {
  username: string,
  user_type: string,
  hostpname: string
}

export interface QofDist {
  id: string,
  hmain: string,
  hmainname: string,
  a: string,
  b: string,
  per: string
}

export interface QofClient {
  hospcode: string,
  hospname: string,
  A: string,
  B: string,
  C: string,
  per: string
}

export interface QofInfo {
  pid: string,
  name: string,
  cid: string,
  birth: string,
  sex: string,
  typearea: string,
  date_start: Date,
  date_end: string
}
