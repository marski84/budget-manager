import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SpinnerService} from "@app/modules/spinner/spinner.service";
import {SpinnerComponent} from './spinner/spinner.component';
import {AsyncPipe, NgIf} from "@angular/common";


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe,
    NgIf
  ],
  exports: [SpinnerComponent],
  providers: [SpinnerService]
})
export class SpinnerModule {
}
