import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiURL = 'https://localhost:7266/api/';

  constructor(private http: HttpClient) { }
}
