import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "@app/modules/spinner/spinner.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  constructor(private spinnerService: SpinnerService
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading$ = this.spinnerService.isLoading$
    })
  }


}
