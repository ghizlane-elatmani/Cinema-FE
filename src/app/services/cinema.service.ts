import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  host: string = 'http://localhost:8080';

  constructor(public http: HttpClient) {}

  public getCities() {
    return this.http.get(`${this.host}/cities`);
  }

  public getCinemas(city: any) {
    return this.http.get(city._links.cinemas.href);
  }

  public getRooms(cinema: any) {
    return this.http.get(cinema._links.rooms.href);
  }

  public getProjections(room: any) {
    let url = room._links.projections.href.replace('{?projection}', '');
    return this.http.get(`${url}?projection=p1`);
  }
}
