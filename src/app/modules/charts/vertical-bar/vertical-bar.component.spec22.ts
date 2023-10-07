import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivateDataInterface} from '@app/modules/shared/activateData.interface';
import {SelectDataInterface} from '@app/modules/shared/selectData.interface';
import {AbstractBarDataInterface} from '@app/modules/Accounting/models/abstractBarData.interface';

import {VerticalBarComponent} from './vertical-bar.component';

// Mock child component
@Component({
    selector: 'app-bar',
    template: '',
})
class MockBarComponent {
    @Input() data!: AbstractBarDataInterface;
    @Output() onActivate: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
    @Output() onDeactivate: EventEmitter<ActivateDataInterface> = new EventEmitter<ActivateDataInterface>();
    @Output() onSelect: EventEmitter<SelectDataInterface> = new EventEmitter<SelectDataInterface>();
}

describe('VerticalBarComponent', () => {
    let component: VerticalBarComponent;
    let fixture: ComponentFixture<VerticalBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VerticalBarComponent, MockBarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VerticalBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the correct number of bars', () => {
        const testData: AbstractBarDataInterface[] = [
            {name: 'Bar 1', value: 10, extra: []},
            {name: 'Bar 2', value: 20, extra: []},
            {name: 'Bar 3', value: 30, extra: []},
        ];
        component.resultData = testData;
        fixture.detectChanges();
        const barElements = fixture.debugElement.queryAll(By.directive(MockBarComponent));
        expect(barElements.length).toBe(testData.length);
    });

    it('should emit onActivate event when a bar is activated', () => {
        const testData: AbstractBarDataInterface = {name: 'Bar 1', value: 10, extra: []};
        component.resultData = [testData];
        fixture.detectChanges();
        const barElement = fixture.debugElement.query(By.directive(MockBarComponent));
        const barComponent = barElement.componentInstance as MockBarComponent;
        const emitSpy = spyOn(component.onActivateEmitted, 'emit');
        barComponent.onActivate.emit();
        expect(emitSpy).toHaveBeenCalledWith({value: testData});
    });

    it('should emit onDeactivate event when a bar is deactivated', () => {
        const testData: AbstractBarDataInterface = {name: 'Bar 1', value: 10, extra: []};
        component.resultData = [testData];
        fixture.detectChanges();
        const barElement = fixture.debugElement.query(By.directive(MockBarComponent));
        const barComponent = barElement.componentInstance as MockBarComponent;
        const emitSpy = spyOn(component.onDeactivateEmitted, 'emit');
        barComponent.onDeactivate.emit();
        expect(emitSpy).toHaveBeenCalledWith({value: testData});
    });

    it('should emit onSelect event when a bar is selected', () => {
        const testData: AbstractBarDataInterface = {name: 'Bar 1', value: 10, extra: []};
        component.resultData = [testData];
        fixture.detectChanges();
        const barElement = fixture.debugElement.query(By.directive(MockBarComponent));
        const barComponent = barElement.componentInstance as MockBarComponent;
        const emitSpy = spyOn(component.onSelectEmitted, 'emit');
        barComponent.onSelect.emit(testData as unknown as SelectDataInterface);
        expect(emitSpy).toHaveBeenCalledWith({value: testData});
    });
});
