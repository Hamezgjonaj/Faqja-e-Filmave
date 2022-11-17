import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  basicData = {
    labels: ['was','current','to be'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: '#42A5F5',
        data: [3,4,5]
      },
    ]
  };

  basicOptions: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: [
        '#EC407A',
        '#AB47BC',
        '#42A5F5',
        '#7E57C2',
        '#66BB6A',
        '#FFCA28',
        '#26A69A'
      ],
      yAxisID: 'y',
      data: [65, 59, 80, 81, 56, 55, 10]
    }, {
      label: 'Dataset 2',
      backgroundColor: '#78909C',
      yAxisID: 'y1',
      data: [28, 48, 40, 19, 86, 27, 90]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
