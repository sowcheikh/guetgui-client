import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit{
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  chart: any = []

  constructor() {
  }
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Aicha', 'Aida', 'Sokhna', 'Ndeya', 'Khadija', 'Lena'],
        datasets: [
          {
            label: 'Mise Bas',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    this.chart = new Chart('canvas1', {
      type: 'pie',
      data: {
        labels: ['Gestation', 'Reproduction', 'En attente', 'En Observation'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
