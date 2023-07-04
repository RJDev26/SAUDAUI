import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-brokerage',
    templateUrl: './add-brokerage.component.html',
    styleUrls: ['./add-brokerage.component.scss']
})

export class AddbrokerageComponent implements OnInit {
    public addBrokerageForm: UntypedFormGroup;

    ngOnInit(): void {
        
    }
}