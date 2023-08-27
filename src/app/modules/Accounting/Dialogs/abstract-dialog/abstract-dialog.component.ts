import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-abstract-dialog',
  templateUrl: './abstract-dialog.component.html',
  styleUrls: ['./abstract-dialog.component.css']
})
export class AbstractDialogComponent {

  constructor(public dialog: MatDialog,
  ) {
  }

  static openDialog() {
    const dialog = inject(MatDialog)
  }


}
