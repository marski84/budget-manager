import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutcomesDialogComponent} from './outcomes-dialog.component';

describe('ChartDialogComponent', () => {
  let component: OutcomesDialogComponent;
  let fixture: ComponentFixture<OutcomesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesDialogComponent]
    });
    fixture = TestBed.createComponent(OutcomesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
