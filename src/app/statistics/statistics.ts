import { Component, importProvidersFrom } from '@angular/core';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-statistics',
  imports: [NgxChartsModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  graphiqueActuel: string = 'taches-etat';

  // options pie chart
  piechartData: any[] = [];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  //option chart bar
  chartbarData: any[] = [];
  showLegendchartBar = true;
  showXAxisLabel = true;
  xAxisLabel = 'Priorité';
  showYAxisLabel = true;
  yAxisLabel = 'Nombre';
  showXAxis = true;
  showYAxis = true;

  //option chart line
  chartlineData: any[] = [];
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabelCL: boolean = true;
  showXAxisLabelCL: boolean = true;
  xAxisLabelCL: string = 'Date';
  yAxisLabelCL: string = 'Nombre de taches';
  timeline: boolean = true;




  constructor(private ts: TaskService) {
    const tasks = ts.getTasks();

    this.piechartData = [
      {
        name: 'Terminées',
        value: tasks.filter(task => task.completed).length
      },
      {
        name: 'Non terminées',
        value: tasks.filter(task => !task.completed).length
      }
    ];



    this.chartbarData = [
      {
        "name": "Faible",
        "value": tasks.filter(task => task.priorite == "Faible").length
      },
      {
        "name": "Moyenne",
        "value": tasks.filter(task => task.priorite == "Moyenne").length
      },
      {
        "name": "Élevée",
        "value": tasks.filter(task => task.priorite == "Élevée").length
      },
      {
        "name": "Critique",
        "value": tasks.filter(task => task.priorite == "Critique").length
      }
    ];

    const dates = [...new Set(
      tasks
        .filter(task => task.createdAt)
        .map(task => new Date(task.createdAt).toLocaleDateString('fr-FR'))
    )];

    this.chartlineData = [{
      name: 'Tâches créées',
      series: dates.map(date => ({
        name: date,
        value: tasks.filter(task =>
          new Date(task.createdAt).toLocaleDateString('fr-FR') === date
        ).length
      }))
    }];
  }

  public changerGraphique(nom: string) {
    this.graphiqueActuel = nom
  }
}
