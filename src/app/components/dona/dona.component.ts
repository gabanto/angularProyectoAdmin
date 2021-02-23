import { Component, Input, Output } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

//Este dato viene del componente padre grafica1 = [labels]="labels1" [data]="data1" 

 //Colocar el titulo a mostrar
 @Input() title: string ="Sin titulo";
 //@Input() labels:string ="";

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];


  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100],
  // ];

  

  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]=[
  	{backgroundColor: ['#6857E6','#009FEE','#F02059'] }
  ];


}
