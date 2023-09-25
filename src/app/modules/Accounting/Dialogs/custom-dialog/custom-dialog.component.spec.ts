import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDialogComponent} from './custom-dialog.component';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue:
          {Pedicure: 100}
      }]
    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    console.log(fixture.debugElement.nativeElement)

    fixture.detectChanges()
    console.log(component.dialogData)

    component.ngOnInit()


  });


});
