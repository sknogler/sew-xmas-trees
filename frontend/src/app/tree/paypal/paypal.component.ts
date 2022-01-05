import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent {

    paypalForm = this.fb.group({
        email: [null, Validators.required],
        password: [null, Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit() {

    }
}
