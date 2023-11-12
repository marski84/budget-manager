import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDialogComponent} from './custom-dialog.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {RecordDataPipe} from "../../../Accounting/RecordData.pipe";

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent, RecordDataPipe],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: ''
        },
      ],

    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    component.dialogData = [{Pedicure: 500}];
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component get dialogData on init', () => {
    expect(component.dialogData).toEqual([{Pedicure: 500}])
  })


});
