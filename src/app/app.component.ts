import {Component, OnInit} from '@angular/core';
import {CountriesService} from "./services/countries.service";
import {CountryMapper} from "./mappers/country.mapper";
import {Country} from "./models/country.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'countries-app';
  regions = ['Europe', 'Asia'];
  countries: Array<Country> = [];

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit() {
    this.countriesService.fetchAllCountries().subscribe(res => {
      this.countries = CountryMapper.fromCountryDtoToCountry(res);
      // console.log(CountryMapper.fromCountryDtoToCountry(res));
    })
  }
}
