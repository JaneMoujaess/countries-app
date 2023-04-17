import {CountryDto} from "../models/countryDto.model";
import {Country} from "../models/country.model";

export class CountryMapper{
  public static fromCountryDtoToCountry(countryDtoArray: CountryDto[]): Country[]{
    return countryDtoArray.map(countryDto => {
      return {
        id: Number(countryDto.ccn3),
        name: countryDto.name.official,
        flag: countryDto.flags.png,
        region: countryDto.region
      }
    })
  }
}
