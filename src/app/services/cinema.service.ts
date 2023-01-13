import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getCities() {
    return this.http.get(`${this.host}/cities`);
  }
}
