import {Component} from '@angular/core';
import {SpinnerService} from "@app/modules/spinner/spinner.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  isLoading$ = this.spinnerService.isLoading$

  constructor(private spinnerService: SpinnerService) {
  }

  activate() {
    this.spinnerService.show()

  }
}
