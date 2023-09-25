/* tslint:disable:no-unused-variable */
import {IncomesComponent} from './incomes.component';
import {AccountingService} from "../../accounting.service";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {of} from "rxjs";
import {SharedModule} from "../../../shared/shared.module";
import {CONFIG} from "../../../shared/CONFIG";
import {incomesChartConfig} from "../../../Accounting/Incomes/incomesChartConfig";

describe('IncomesComponent', () => {
  let component: IncomesComponent;
  let fixture: ComponentFixture<IncomesComponent>;
  let service: any

  beforeEach(() => {
    service = {
      fetchIncomesData: jest.fn(),
      fetchOutcomesData: jest.fn()
    }

    TestBed.configureTestingModule({
      declarations: [IncomesComponent],
      imports: [SharedModule],
      providers: [{provide: AccountingService, useValue: service},
        {provide: CONFIG, useValue: incomesChartConfig}]
    })
      .compileComponents();

    // TestBed.inject(service)
  });

  beforeEach(() => {
    service.fetchIncomesData.mockReturnValue(of(true))

    fixture = TestBed.createComponent(IncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call fetchIncomesData', () => {
  //   // given
  //   service.fetchIncomesData.mockReturnValue(of(true))
  //   const spy = jest.spyOn(service, 'fetchIncomesData')
  //   //   when
  //   component.getData()
  //   // then
  //   expect(spy).toHaveBeenCalled()
  // })
});
