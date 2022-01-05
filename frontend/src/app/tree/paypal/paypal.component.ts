import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {SellDateService} from "../../shared/sell-date.service";
import {BackendService, ITree} from "../../shared/backend.service";

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent {

    paypalForm = this.fb.group({
        email: [null, Validators.compose([
            Validators.required, Validators.email])
        ],
        password: [null, Validators.required],
    });

    public tree: ITree;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private readonly dataService: SellDateService,
        private readonly backendService: BackendService
    ) {
        this.tree = dataService.tree!;
    }

    ngOnInit(): void {
    }

    onSubmit() {

    }
}
