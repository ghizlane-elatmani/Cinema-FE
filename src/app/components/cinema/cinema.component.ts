import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
})
export class CinemaComponent implements OnInit {
  cities: any;
  cinemas: any;
  currentCity: any;
  currentCinema: any;
  rooms: any;

  constructor(public cinemaService: CinemaService) {}

  ngOnInit() {
    this.cinemaService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  onGetCinemas(city: any) {
    this.currentCity = city;
    this.cinemaService.getCinemas(city).subscribe((data) => {
      this.cinemas = data;
    });
  }

  onGetRooms(cinema: any) {
    this.currentCinema = cinema;
    this.cinemaService.getRooms(cinema).subscribe((data) => {
      this.rooms = data;
      this.rooms._embedded.rooms.forEach((room: any) => {
        this.cinemaService.getProjections(room).subscribe((data) => {
          room.projections = data;
        });
      });
    });
  }
}
