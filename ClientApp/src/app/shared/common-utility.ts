import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


export class CommonUtility {

  constructor() { }
   
  

  public static formatNumber(numberToBeFormatted: any): string
  {
    if (numberToBeFormatted) {
      return numberToBeFormatted.toFixed(2).toString().replace(/(\d)(?=(\d{3])+(?!\d))/g, "1,");
    }
    else {
      return numberToBeFormatted;
    }

  }

}
