export interface CountryDto {
  flags: FlagsDto;
  name:  NameDto;
  ccn3:  string;
  region: string;
}

export interface FlagsDto {
  png: string;
  svg: string;
  alt: string;
}

export interface NameDto {
  common:     string;
  official:   string;
}
