import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";
import {CountryMapper} from "./mappers/country.mapper";

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
      console.log(CountryMapper.fromCountryDtoToCountry(res));
    })
  }
}
