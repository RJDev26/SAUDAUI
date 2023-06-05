import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from "./company-dialog/add-company.component";
import { AppSettings } from "src/app/app.settings";
import { MasterService } from "../master.service";
import { Settings } from "src/app/app.settings.model";

@Component({
    selector: 'app-blank',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit {
  public settings: Settings
  constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
  }
  ngOnInit() {
      
  }

  public openCompanyDialog(user) {
    let dialogRef = this.dialog.open(AddCompanyComponent, {
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