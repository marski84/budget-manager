import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDialogComponent} from './custom-dialog.component';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

describe('CustomDialogComponent', () => {
  let component: CustomDialogComponent;
  let fixture: ComponentFixture<CustomDialogComponent>;

  class dialogMock {
    open() {
      return true
    }

    close() {
      return true
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDialogComponent],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue:
          {Pedicure: 100}
      },
        {
          provide: MatDialog, useClass: dialogMock
        }],

    });
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges()
    console.log(component.dialogData)

    component.ngOnInit()
  });

  it('should component get data', () => {
    //   given
    //   then
    fixture.detectChanges()
    const dialog = fixture.debugElement.nativeElement.querySelector('#dialog')
    console.log(dialog)
    // expect(component.dialogData).toEqual({Pedicure: 100})
  })


});
