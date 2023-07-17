import {Component, OnInit} from '@angular/core';
import {AccountingService} from "@app/modules/Accounting/accounting.service";

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css']
})
export class OutcomesComponent implements OnInit {

  constructor(private accountingService: AccountingService) {
  }

  ngOnInit() {
    this.accountingService.fetchOutcomesData().subscribe(data => console.log(data))
  }

}
