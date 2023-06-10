import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSaudaComponent } from './sauda-dialog/add-sauda.component';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from '../master.service';

@Component({
    selector: 'app-blank',
    templateUrl: './sauda.component.html',
    styleUrls: ['./sauda.component.scss']
})

export class SaudaComponent implements OnInit {
    public settings: Settings
    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        //this.getAccountList();
    }

    public openSaudaDialog(user) {
        let dialogRef = this.dialog.open(AddSaudaComponent, {
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