import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from "./invite-user/invite-user.component";
import { MasterService } from "../Master/master.service";
import { AppService } from "src/app/service/app.service";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserRoleComponent {
    public settings: Settings;
    constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
        this.settings = this.appSettings.settings;
    
    }

    public inviteUserDialog(user) {
        let dialogRef = this.dialog.open(InviteUserComponent, {
          data: { id:user }
        });
    }
}