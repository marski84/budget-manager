/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OutcomesComponent} from './outcomes.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AccountingService} from "../../accounting.service";
import {outcomesChartConfig} from "../../Outcomes/OutcomesChartConfig";
import {CONFIG} from "../../../shared/CONFIG";
import {OutcomesDialogComponent} from "../../Dialogs/outcomes-dialog/outcomes-dialog.component";

describe('OutcomesComponent', () => {
  let component: OutcomesComponent;
  let fixture: ComponentFixture<OutcomesComponent>;

  const dialogMock = {
    open: jest.fn(),
    close: jest.fn(),
  };

  const accountingServiceMock = {
    fetchOutcomesData: jest.fn(),
    registerNewOutcome: jest.fn()
  };

  const mockData = {
    name: 'testData',
    value: 1000,
    extra: {
      test: 1000
    },
    label: 'test'
  }

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesComponent, OutcomesDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: AccountingService, useValue: accountingServiceMock},
        {provide: MatDialog, useValue: dialogMock},
        {provide: CONFIG, useValue: outcomesChartConfig},

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call OutcomesDialogComponent.openDialog when handleOpenDialog is called', () => {
    // given
    const serviceSpy = jest.spyOn(OutcomesDialogComponent, 'openDialog')
    //   when
    component.handleOpenDialog(mockData)
    // then
    expect(serviceSpy).toHaveBeenCalled();
  })


});


describe('on init tests', () => {
  let component: OutcomesComponent;
  let fixture: ComponentFixture<OutcomesComponent>;
  const accountingServiceMock = {
    fetchOutcomesData: jest.fn(),
    registerNewOutcome: jest.fn()
  };
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesComponent, OutcomesDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: AccountingService, useValue: accountingServiceMock},
        {provide: MatDialog, useValue: {}},
        {provide: CONFIG, useValue: outcomesChartConfig},

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  it('it should call fetchOutcomesData on Init', () => {
    fixture = TestBed.createComponent(OutcomesComponent);
    component = fixture.componentInstance;

    // accountingService = TestBed.inject(AccountingService);
    const spy = jest.spyOn(accountingServiceMock, 'fetchOutcomesData')
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  })

})

