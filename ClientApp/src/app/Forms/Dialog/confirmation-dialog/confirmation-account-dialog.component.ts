import { Component, Inject, EventEmitter, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
    selector: 'confirmation-account-dialog',
    templateUrl: 'confirmation-account-dialog.component.html',
})

export class ConfirmationAccountDialog {
    message: string = "Are you sure?"
    content: any
    confirmButtonText = "Yes"
    cancelButtonText = "Cancel"
    @Output() submitClicked: EventEmitter<void> = new EventEmitter<void>();

  // Other component code  
    constructor(
      @Inject(MAT_DIALOG_DATA) private data: any,
      private dialogRef: MatDialogRef<ConfirmationAccountDialog>) {
      if (data) {
        this.message = data.message || this.message;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
    }

    onConfirmClick() {
      this.dialogRef.close(true);
      // This method will be called when the "Submit" button is clicked
      this.submitClicked.emit();
    }
  
    // onConfirmClick(): void {
    //   this.dialogRef.close(true);
    // }
  
}