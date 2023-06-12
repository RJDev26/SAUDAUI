import { Component, OnInit } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-blank',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    public settings: Settings
    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
      
    }
    

}