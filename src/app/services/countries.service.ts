import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CountryDto} from "../models/countryDto.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  fetchAllCountries(){
    return this.http.get<Array<CountryDto>>(this.baseUrl + 'all?fields=ccn3,name,flags,region');
  }
}
