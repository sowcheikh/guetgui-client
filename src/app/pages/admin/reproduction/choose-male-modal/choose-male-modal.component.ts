import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";

@Component({
  selector: 'app-choose-male-modal',
  templateUrl: './choose-male-modal.component.html',
  styleUrls: ['./choose-male-modal.component.css']
})
export class ChooseMaleModalComponent {
  selectedMale: any;
  males: any[];

  constructor(
    public dialogRef: MatDialogRef<ChooseMaleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.males = data.males;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.selectedMale);
  }
}
