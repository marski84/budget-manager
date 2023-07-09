import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  data = [
    { 'name' : "> 95", 'value' : 765, },
    {'name' : "90 - 94", 'value' : 123},
    {'name' : "< 90", 'value' : 84}
  ]

  // colorScheme = {
  //   domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  // };
}
