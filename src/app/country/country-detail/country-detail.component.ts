import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country;
  
  constructor(
    private location:Location,
    private countryService: CountryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let name: string = this.route.snapshot.paramMap.get('name');
    this.country = this.countryService.getCountry( name );
  }

  goBack() {
    this.location.back()
  }

}
