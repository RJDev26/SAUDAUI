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
    userList: any=[];
    public settings: Settings;
    constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
        this.settings = this.appSettings.settings;    
    }

    agGridOptions: any = {
        defaultColDef: {
          filter: true,
          flex: 1,
          sortable: true,
          wraptext: true,
          resizable: true
        }
    }

    public actionCellRenderer(params: any) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell: any) => {
          return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>`;
    
        return eGui;
    }

    onGridClick(params: any) {
        if (params.event.target.dataset.action == "edit")
        {
          this.inviteUserDialog(params.data.id);
    
        }
    }

    columnDefs = [
        {
            headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
            maxWidth: 110, resizable: true, filter: false
        },
        { headerName: 'First Name', field: 'firstName', filter: true, sorting: true, resizable: true },
        { headerName: 'Last Name', field: 'lastName', filter: true, sorting: true, resizable: true },
        { headerName: 'User Name', field: 'userName', filter: true, sorting: true, resizable: true },
        { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true },    
    ];

    getUserList() {
        this._appService.getUserList().subscribe((results) => {
            this.userList = results.data;         
        });
    }

    ngOnInit() {
        this.getUserList();
    }

    public inviteUserDialog(user) {
        let dialogRef = this.dialog.open(InviteUserComponent, {
          data: { id:user }
        });
    }
}