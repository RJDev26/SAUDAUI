import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../imports.service';
import { forkJoin, map } from 'rxjs';
import { MasterService } from '../../Master/master.service';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})
export class ScriptsComponent implements OnInit {
  files: File[] = [];
  exchangeList: any;
  selectedExId: any;
  onSelect(event) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  constructor(private _scriptsService: ScriptsService, private _masterService: MasterService) { }

  ngOnInit(): void {
    this.getExchangeList();
  }

  getExchangeList(){
    forkJoin([this._masterService.getExchangeName()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {
    });
  }
  onSave() {

  }
  submit() {
    if (this.files.length > 0 && this.selectedExId) {
      this.files.forEach((file, idx, array) => {
        let fileReader: FileReader = new FileReader();
        fileReader.readAsDataURL(file); fileReader.onloadend = (e) => {

          const formData: FormData = new FormData();
          formData.append("files", this.files[0], file.name);
          formData.append("exCode", this.selectedExId);
          //formData.append('listid' this.listid);
          //formData.append('userId', this.userId);

          if (idx == array.length - 1) {
            this._scriptsService.ImportScript(formData).subscribe(result => {
              console.log("result", result);

            }, err => {
              console.log(err);
            });
          }
        }

      });
      }
  }
}

