import { Component, OnInit, ViewChild } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AddProductComponent } from "./product-dialog/add-product.component";
import { AppService } from "src/app/service/app.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-blank',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;
    editing = {};
    rows = [];
    temp = [];
    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;
    columns = [
      { prop: 'Name' },
      { name: 'item' },
      { name: 'name' }
    ];
    public settings: Settings;
    productList: any;
    constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
      this.settings = this.appSettings.settings;

    }

    ngOnInit() {
      this.getproductList();
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

    columnDefs = [
      {
        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
        maxWidth: 110, resizable: true
      },
      { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
      { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
      { headerName: 'PriceUnit', field: 'priceUnit', filter: true, sorting: true, resizable: true },
      { headerName: 'Description', field: 'description', filter: true, sorting: true, resizable: true },    
      { headerName: 'LotSize', field: 'lotSize', filter: true, sorting: true, resizable: true },
      { headerName: 'QtyUnit', field: 'qtyUnit', filter: true, sorting: true, resizable: true },
      { headerName: 'Isincode', field: 'isincode', filter: true, sorting: true, resizable: true },
      { headerName: 'SecurityGroup', field: 'securityGroup', filter: true, sorting: true, resizable: true },
      { headerName: 'CreatedBy', field: 'createdBy', filter: true, sorting: true, resizable: true },
      { headerName: 'CreatedDate', field: 'createdDate', filter: true, sorting: true, resizable: true }
    ];

    getproductList() {
      this._appService.getProduct().subscribe((results) => {
       this.productList = results;       
      });
    }

    public actionCellRenderer(params: any) {
      let eGui = document.createElement("div");
      let editingCells = params.api.getEditingCells();
      let isCurrentRowEditing = editingCells.some((cell: any) => {
        return cell.rowIndex === params.node.rowIndex;
      });
      eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                        <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
  
      return eGui;
    }

    onGridClick(params: any) {
      debugger
      if (params.event.target.dataset.action == "edit")
      {
        this.openSaudaDialog(params.data.id);
      }
      if (params.event.target.dataset.action == "delete")
      {
        const dialogRef = this.dialog.open(ConfirmationDialog, {
          data: {
            message: 'Are you sure want to delete?',
            buttonText: {
              ok: 'Yes',
              cancel: 'No'
            }
          }
        });
  
        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
          if (confirmed) {
            this._masterService.deleteProduct(params.data.id).subscribe((res) => {
              this.getproductList();
            });
          }
        });
  
  
      }
    }

    public openSaudaDialog(user) {
        let dialogRef = this.dialog.open(AddProductComponent, {
          data: { id:user }
        });
      
        dialogRef.afterClosed().subscribe(user => {
          this.getproductList();
          if (user) {
            /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
          }
        });
    }    

}