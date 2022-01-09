export interface CountryProps {
  name: NameProps,
  capital: string[],
  population: number,
  languages: object,
  flags: FlagsProps,
}

export interface WeatherProps {
  main: MainProps,
  wind: WindProps,
}

interface NameProps {
  common: string,
}

interface FlagsProps {
  svg: string,
}

interface MainProps {
  temp: number
}

interface WindProps {
  speed: number
}