import { Component, OnInit } from '@angular/core';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
})
export class CinemaComponent implements OnInit {
  cities: any;

  constructor(private cinemaService: CinemaService) {}

  ngOnInit() {
    this.cinemaService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }
}
