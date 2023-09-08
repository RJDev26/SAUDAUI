import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../imports.service';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})
export class ScriptsComponent implements OnInit {

  constructor(private _scriptsService: ScriptsService) { }

  ngOnInit(): void {
  }

}
