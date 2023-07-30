import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CONFIG} from "@app/modules/shared/CONFIG";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: CONFIG, useValue: ''}]
})
export class SharedModule {
}
