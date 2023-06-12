import { Component, OnInit } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from "./product-dialog/add-product.component";

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

    public openSaudaDialog(user) {
        let dialogRef = this.dialog.open(AddProductComponent, {
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