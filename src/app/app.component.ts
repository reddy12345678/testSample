import { Component } from '@angular/core';
import { BarSparklineOptions } from 'ag-grid-community';
import 'ag-grid-enterprise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rowData: any = [];
  columnDefs: any = [];
  title = 'sample';
  monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", 
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  constructor() {
    const startingYear = 2018;
    const endingYear = 2021;
    this.rowData.push({test: '',test1: [0.8]});
    this.rowData.push({test: '',test1: []});
    this.rowData.push({test: '',test1: [], test2: [0.9]});
    this.rowData.push({test: '',test1: []});
    this.rowData.push({test: '',test1: []});
    for (let i = 0; i <= endingYear - startingYear; i++) {
      this.monthNames.forEach(f => {
        // finalArray.push(`${f} ${startingYear + i}`);
        if (f === 'Feb' || f === 'Mar') {
          this.columnDefs.push({
            headerName: `${f} ${startingYear + i}`, field: `test1`,  resizable: true, 
            hide: false, sortable: false,
            cellRenderer: 'agSparklineCellRenderer',
        cellRendererParams: {
          sparklineOptions: {
            type: 'bar',
            fill: '#5470c6',
            stroke: '#91cc75',
            highlightStyle: {
              fill: '#fac858',
            },
            valueAxisDomain: [0, 1],
            paddingOuter: 0,
            padding: {
              top: 0,
              bottom: 0,
            },
            axis: {
              strokeWidth: 0,
            },
          } as BarSparklineOptions,
        },
           });
        } else if (f === 'May' || f === 'June') {
          this.columnDefs.push({
            headerName: `${f} ${startingYear + i}`, field: `test2`,  resizable: true, 
            hide: false, sortable: false,
            cellRenderer: 'agSparklineCellRenderer',
        cellRendererParams: {
          sparklineOptions: {
            type: 'bar',
            fill: '#5470c6',
            stroke: '#91cc75',
            highlightStyle: {
              fill: '#fac858',
            },
            valueAxisDomain: [0, 1],
            paddingOuter: 0,
            padding: {
              top: 0,
              bottom: 0,
            },
            axis: {
              strokeWidth: 0,
            },
          } as BarSparklineOptions,
        },
           });
        } else {
          this.columnDefs.push({
            headerName: `${f} ${startingYear + i}`, field: `test`,  resizable: true, 
            hide: false, sortable: false,
           });
        }
      })
    }
  }
}
