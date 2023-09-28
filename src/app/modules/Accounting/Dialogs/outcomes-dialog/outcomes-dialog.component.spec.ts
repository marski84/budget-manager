import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutcomesDialogComponent} from './outcomes-dialog.component';
import {MatDialogRef} from "@angular/material/dialog";
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChartDialogComponent', () => {
  let component: OutcomesDialogComponent;
  let fixture: ComponentFixture<OutcomesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesDialogComponent],
      providers: [MatDialogRef],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(OutcomesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
