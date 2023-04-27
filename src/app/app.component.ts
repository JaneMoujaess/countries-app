import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { CountryMapper } from './mappers/country.mapper';
import { Country } from './models/country.model';
import { Store } from '@ngrx/store';
import { AppState } from './state/AppState';
import { highlightRegion } from './state/country.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'countries-app';
  regions = ['Europe', 'Asia', 'Oceania', 'Africa', 'Americas'];
  countries: Array<Country> = [];
  highlightedRegion$: Observable<any>;

  constructor(
    private countriesService: CountriesService,
    private store: Store<AppState>
  ) {
    this.highlightedRegion$ = store.select('highlightedRegion');
  }

  ngOnInit() {
    this.countriesService.fetchAllCountries().subscribe((res) => {
      this.countries = CountryMapper.fromCountryDtoToCountry(res);
    });
    this.highlightedRegion$.subscribe((region) => console.log(region));
  }

  onMouseEnter(region: string) {
    this.store.dispatch(highlightRegion({ region }));
  }

  onMouseLeave(region: string) {
    this.store.dispatch(highlightRegion({ region }));
  }
}
