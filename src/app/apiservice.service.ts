import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiURL = 'https://localhost:7266/api/';

  constructor(private http: HttpClient) { }

  getDepartmentList(): Observable<any[]> {
    return this.http.get<any>(this.apiURL + 'department/');
  }
}
