import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "../../../modules/spinner/spinner.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading$: Observable<boolean> = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService
  ) {
  }

  ngOnInit(): void {}
}
