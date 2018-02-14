import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  populatedCountries: Country[];
  largestCountries: Country[];

  constructor(private countryService:CountryService ) { }

  ngOnInit() {
    this.setPopulatedCountries();
    this.setLargestCountries();
  }

  setPopulatedCountries() {
    this.populatedCountries = this.countryService.getPopulatedCountries();
  }

  setLargestCountries() {
    this.largestCountries = this.countryService.getLargestCountries();
  }

}
