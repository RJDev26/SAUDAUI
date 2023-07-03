import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-brokerage-setup',
    templateUrl: './brokerage-setup.component.html',
  styleUrls: ['./brokerage-setup.component.scss']
})

export class BrokerageSetupComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  @ViewChild('selectAccount') selectAccount: MatSelect;
  public settings: Settings
  slabId: number;
  slabList: any[];
  accountList: any[];
  branchList: any[];
  branchIds: any;
  accountIds: any;

    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

  ngOnInit() {
    this.fetchDropdownData();
  }

  fetchDropdownData() {
    this._masterService.getSlabDDL().subscribe((response) => { this.slabList = response });
    this._masterService.getBranchList().subscribe((response) => { this.branchList = response });

    
  }
  branchAllSelection()
  {
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach(
      (item: MatOption) =>
      {
      
        if (isAllChecked) { item.select(); }
          else { item.deselect() }
      }
     
    );
   
  }


  accountAllSelection()
  {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(
      (item: MatOption) => {

        if (isAllChecked) { item.select(); }
        else { item.deselect() }
      }

    );

  }


  onKey(value) {
    this.branchList = this.search(value);
}


  search(value: string) {
  let filter = value.toLowerCase();
  return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
}

  onBranchChange(event: any) {
  
    //event.source.options._results[1]._selected = true;
    //event.source.options._results[1]._active = true;
    if (this.branchIds) {
      this._masterService.getBranchAccounts(this.branchIds).subscribe(
        response => {
          this.accountList = response;
        }
      );
    }
  }

  applySlab(event: any)
  { }
  addBrokerage(event: any) { }
}
