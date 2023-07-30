import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Income} from "@app/modules/Accounting/models/incomesData.interface";


@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDialogComponent implements OnInit {
  dialogData: Income[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { data: Income[] }) {
    this.dialogData = data.data
  }

  ngOnInit(): void {
  }


}
