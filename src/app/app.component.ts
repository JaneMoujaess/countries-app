import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'countries-app';

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.countriesService.fetchAllCountries().subscribe(res => {
      console.log(res);
    })
  }
}
