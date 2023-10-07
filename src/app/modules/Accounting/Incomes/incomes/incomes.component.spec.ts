import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {IncomesComponent} from './incomes.component';
import {AccountingService} from '../../accounting.service';
import {of} from 'rxjs';
import {CustomDialogComponent} from '../../../Accounting/Dialogs/custom-dialog/custom-dialog.component';
import {CONFIG} from '../../../shared/CONFIG';
import {incomesChartConfig} from '../../../Accounting/Incomes/incomesChartConfig';
import {SpinnerService} from "../../../spinner/spinner.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('IncomesComponent', () => {
  let component: IncomesComponent;
  let fixture: ComponentFixture<IncomesComponent>;
  let accountingService: AccountingService;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomesComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: CONFIG, useValue: incomesChartConfig},
        {provide: AccountingService, useValue: {fetchIncomesData: () => of([])}},
        {provide: SpinnerService, useValue: {show: jest.fn(), hide: jest.fn()}}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesComponent);
    component = fixture.componentInstance;
    accountingService = TestBed.inject(AccountingService);
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch incomes data on initialization', () => {
    jest.spyOn(accountingService, 'fetchIncomesData');

    component.ngOnInit();

    expect(accountingService.fetchIncomesData).toHaveBeenCalled();
    expect(component.incomeData$).toEqual(of([]));
  });

  it('should open dialog on activate', () => {
    jest.spyOn(dialog, 'open')

    // component.onActivate({ value: { extra: [] } });

    expect(dialog.open).toHaveBeenCalledWith(CustomDialogComponent, {
      hasBackdrop: false,
      position: {top: '10%'},
      data: {
        data: [],
      }
    });
    expect(component.dialogRef).toBeDefined();
  });

  it('should close dialog on deactivate', () => {
    jest.spyOn(component.dialogRef, 'close');

    // component.onDeactivate({});

    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
