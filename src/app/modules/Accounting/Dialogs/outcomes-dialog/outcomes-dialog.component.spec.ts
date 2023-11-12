import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutcomesDialogComponent} from './outcomes-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {AccountingService} from "../../accounting.service";

describe('OutcomesDialogComponent', () => {
  let component: OutcomesDialogComponent;
  let fixture: ComponentFixture<OutcomesDialogComponent>;

  const dialogMock = {
    open: jest.fn(),
    close: jest.fn()
  }

  const dialogRefMock = {
    open: jest.fn(),
    close: jest.fn()
  }

  const accountngServiceMock = {
    registerNewOutcome: jest.fn()
  }

  const mockChartData = {
    name: 'test',
    value: 500,
    title: 'Test',
    dataToDisplay: [
      {
        Test: 500
      }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesDialogComponent],
      // imports: [ChartsModule],
      providers: [
        {provide: MatDialog, useValue: dialogMock},
        {provide: MatDialogRef, useValue: dialogRefMock},
        {provide: MAT_DIALOG_DATA, useValue: ''},
        {provide: AccountingService, useValue: accountngServiceMock},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(OutcomesDialogComponent);
    component = fixture.componentInstance;
    component.dataToDisplay = mockChartData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dataToDisplay defined', () => {
    expect(component.dataToDisplay).toEqual(mockChartData);
  });

  it('should closeDialog method call dialogRef.close', () => {
    // given
    const dialogRefSpy = jest.spyOn(dialogRefMock, 'close')
    //   when
    component.closeDialog()
    //   then
    expect(dialogRefSpy).toHaveBeenCalled()
  });

  it('should handleDataEmitted call accountingService.registerNewOutcome', () => {
    //   given
    const testData = {
      expenseAmount: '100',
      month: 'may',
      outcomeType: 'test_type'
    }
    const accountingServiceSpy = jest.spyOn(accountngServiceMock, 'registerNewOutcome')
    //   when
    component.handleDataEmitted(testData);
    //   then
    expect(accountingServiceSpy).toHaveBeenCalledWith(testData);
  });

  it('should OutcomesDialogComponent.openDialog method call dialog.open', () => {
    //   given
    const spy = jest.spyOn(OutcomesDialogComponent, 'openDialog')
    //   when
    OutcomesDialogComponent.openDialog(dialogMock as any, {})
    //   then
    expect(spy).toHaveBeenCalled();
  })
});
