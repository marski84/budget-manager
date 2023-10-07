import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerComponent} from '../../../modules/spinner/spinner/spinner.component';
import {SpinnerService} from "../../../modules/spinner/spinner.service";

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let spinnerService: SpinnerService
  let element: HTMLElement;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [SpinnerService]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(SpinnerComponent)
        component = fixture.componentInstance;
        spinnerService = TestBed.inject(SpinnerService)
        element = fixture.nativeElement;

      }
    );


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isLoading$ after 1 second', (async () => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
        fixture.detectChanges();
        spinnerService.show();
        fixture.detectChanges();
        spinnerService.show();


        // expect(compiled).toContain('mat-progress-spinner')
        // expect(fixture.nativeElement.innerHTML).toContain('<mat-progress-spinner></mat-progress-spinner>')
        expect(fixture.nativeElement.innerHTML).toContain('dupa')

      }
    )


    component.ngOnInit();


  }));

  it('should start spinner when show() method is called', (() => {
    // given
    component.ngOnInit();
    // when
    spinnerService.show();
    fixture.detectChanges();
    // then
    let result
    spinnerService.isLoading$.subscribe(val => result = val)
    // @ts-ignore
    expect(result).toEqual(true);

  }));


});
