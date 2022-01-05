import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
  });

  hasUnitNumber = false;

  states = [
    {name: 'Burgenland', abbreviation: 'BL'},
    {name: 'Carinthia', abbreviation: 'CA'},
    {name: 'Lower Austria', abbreviation: 'LA'},
    {name: 'Upper Austria', abbreviation: 'UA'},
    {name: 'Salzburg', abbreviation: 'SA'},
    {name: 'Styria', abbreviation: 'ST'},
    {name: 'Tyrol', abbreviation: 'TY'},
    {name: 'Vorarlberg', abbreviation: 'VB'},
    {name: 'Vienna', abbreviation: 'VI'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
