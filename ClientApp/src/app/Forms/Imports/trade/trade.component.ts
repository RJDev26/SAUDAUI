import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../imports.service';
import { forkJoin, map } from 'rxjs';
import { MasterService } from '../../Master/master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MasterSecondService } from '../../Master/master-second.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  files: File[] = [];
  exchangeList: any;
  selectedExId: any;
  showError: boolean;
  lotFile: boolean = false;

  isExcelFile(file: File): boolean {
    const allowedExtensions = ['.csv', '.xlsx', '.xls'];
    const fileExtension = file.name.toLowerCase().slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
    return allowedExtensions.includes('.' + fileExtension);
  }

  onSelect(event) {
    console.log(event);
    this.showError = false;
    this.files = [];

    // Filter out non-Excel files
    const excelFiles = event.addedFiles.filter(this.isExcelFile);
    if (!excelFiles.length) {
      this.showError = true
    }

    this.files.push(...excelFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(public snackBar: MatSnackBar, private _scriptsService: ScriptsService, private _masterService: MasterService, private _masterSeconedService: MasterSecondService) { }

  ngOnInit(): void {
    this.getExchangeList();
  }

  getExchangeList() {
    forkJoin([this._masterSeconedService.getTradeFileList()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {
    });
  }

  submit() {
    if (this.files.length > 0 && this.selectedExId) {
      this.files.forEach((file, idx, array) => {
        let fileReader: FileReader = new FileReader();
        fileReader.readAsDataURL(file); fileReader.onloadend = (e) => {

          const formData: FormData = new FormData();
          formData.append("files", this.files[0], file.name);
          formData.append("fileTypeId", this.selectedExId);
         // formData.append("lotFile", String(this.lotFile));
         

          if (idx == array.length - 1) {
            this._scriptsService.ImportTrade(formData).subscribe(res => {
              console.log("result", res);
              this.resetForm();
              this.showToaster(res.message, !res.isSuccess);
            }, err => {
              console.log(err);
            });
          }
        }

      });
    }
  }

  resetForm() {
    this.selectedExId = '';
    this.files = [];
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;

    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }
}

