import { Component, OnInit } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddContractMasterComponent } from "./contract-master-dialog/add-contract-master.component";

@Component({
    selector: 'app-blank',
    templateUrl: './contract-master.component.html',
    styleUrls: ['./contract-master.component.scss']
})

export class ContractMasterComponent implements OnInit {
    public settings: Settings
    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
      
    }

    public openCompanyDialog(user) {
        let dialogRef = this.dialog.open(AddContractMasterComponent, {
          data: user
        });
      
        dialogRef.afterClosed().subscribe(user => {
          //this.getAccountList();
          if (user) {
            /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
          }
        });
      }
}