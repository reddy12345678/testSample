import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  public timelineChartData:any =  {
    chartType: 'Timeline',
    options: {
      width:1000,
      height: 1000,
      colors: ['#cbb69d', '#603913', '#c69c6e'],
      timeline: { 
        groupByRowLabel: true,
        showRowLabels:false,
        axes: {
          x: {
             0: {side: 'top'}
          }      
       }
       },
    },
    dataTable: [
      ['Name', 'From', 'To'],
      [ 'Washington', new Date(2008, 1 ,1), new Date(2009, 1 ,1) ],
      [ 'Washington', new Date(2009, 2 ,2),  new Date(2010, 3, 3) ],
      [ 'Washington',  new Date(2011, 4, 4),  new Date(2012, 4, 4) ]
    ]
 }
}
