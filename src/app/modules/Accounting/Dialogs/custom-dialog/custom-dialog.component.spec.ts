import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDialogComponent} from './custom-dialog.component';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  // class dialogMock {
  //   open() {
  //     return true
  //   }

  //   close() {
  //     return true
  //   }
  // }
  const dialogMock = {
    open: jest.fn(),
    close: jest.fn(),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue:
          {Pedicure: 100}
      },
        {
          provide: MatDialog, useValue: dialogMock
        }],

    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component get data', () => {
    //   given
    // const dialog = fixture.debugElement.nativeElement.querySelector('#dialog');
    //   then

    // expect(component.dialogData).toEqual({Pedicure: 100})
  })


});
