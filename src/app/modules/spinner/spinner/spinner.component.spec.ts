import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerComponent} from '../../../modules/spinner/spinner/spinner.component';
import {SpinnerService} from "../../../modules/spinner/spinner.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let spinnerService: SpinnerService
  let element: HTMLElement;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [SpinnerService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(SpinnerComponent)
        component = fixture.componentInstance;
        spinnerService = TestBed.inject(SpinnerService)
        element = fixture.nativeElement;

      }
    );


  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize spinner after show() method is called', (async () => {
    // given
    spinnerService.show();
    fixture.detectChanges();
    // when
    // const spinner = fixture.debugElement.nativeElement.querySelector('mat-progress-spinner');
    // then
    expect(fixture.nativeElement.outerHTML).toContain('mat-progress-spinner')

  }));

  it('should start hide spinner when hide() method is called', (() => {
    // given
    spinnerService.show();
    fixture.detectChanges();
    // when
    spinnerService.hide();
    fixture.detectChanges();
    // then
    // const spinner = fixture.debugElement.nativeElement.querySelector('mat-progress-spinner');
    // then
    expect(fixture.nativeElement.outerHTML).not.toContain('mat-progress-spinner')
  }));


});
