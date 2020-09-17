import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorDetailsService } from 'src/app/services/error-details.service';
import { MonitorService } from 'src/app/services/monitor.service';

@Component({
  selector: 'app-load-drilldown',
  templateUrl: './load-drilldown.component.html',
  styleUrls: ['./load-drilldown.component.css']
})
export class LoadDrilldownComponent implements OnInit {
  isErrorButtonEnable: boolean;
  successTypeDataArray: { label: string, value: any }[] = [];
  failedTypeDataArray: { label: string, value: any }[] = [];
  chartInstance: any = {};
  dataSource = {
    "chart": {
      "caption": "Objects loaded into Enovia",
      "captionFontColor": "#4b4276",
      "captionFont": "Callibri",
      "subcaption": "",
      "xaxisname": "",
      "yaxisname": "",
      "numberprefix": "",
      "theme": "fusion",
      "plottooltext": "$label, $dataValue",
      "paletteColors": "#0dd63f,#c73535",
      "rotateValues": "0"
    },
    "data": [{
      "label": "Successful Objects",
      "value": 0,
      "link": "newchart-xml-transformedObjects"
    },
    {
      "label": "Failed Objects",
      "value": 0,
      "link": "newchart-xml-failedObjectsTypes"
    }
    ],
    "linkeddata": [{
      "id": "transformedObjects",
      "linkedchart": {
        "chart": {
          "caption": "Type specific successfully Loaded Objects",
          "captionFontColor": "#4b4276",
          "captionFont": "Callibri",
          "subcaption": "",
          "numberprefix": "",
          "theme": "fusion",
          "rotateValues": "0",
          "plottooltext": "$label, $dataValue",
          "paletteColors": "#5AA454, #FFC533,#a8385d, #7aa3e5",

        },
        "data": this.successTypeDataArray
      }
    },
    {
      "id": "failedObjectsTypes",
      "linkedchart": {
        "chart": {
          "caption": "Type specific failed Loaded Objects",
          "subcaption": "",
          "captionFontColor": "#4b4276",
          "captionFont": "Callibri",
          "numberprefix": "",
          "theme": "fusion",
          "plottooltext": "$label, $dataValue",
          "paletteColors": "#5AA454, #FFC533,#a8385d, #7aa3e5",
        },
        "data": this.failedTypeDataArray
      }
    }
    ]
  };

  constructor(private monitorservice: MonitorService, private errordetailsService: ErrorDetailsService) {
    //Render Load Successful Object Count
    this.getSuccessfulObjectCount();
    //Render Load Failed Object Count
    this.getFailedObjectCount();
    //Render Load Successed Type Count
    this.getSuccessedTypeCount();
    //Render Load Failed Type Count
    this.getFailedTypeCount();
  }

  ngOnInit(): void {
  }

  // Callback to get chart instance
  initialized(e) {
    this.chartInstance = e.chart; // Save it for further use

    // Configure Drilldown attributes 
    // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
    this.chartInstance.configureLink([
      {
        type: "column3d",
        overlayButton: {
          message: 'Back',
          fontColor: '880000',
          bgColor: 'FFEEEE',
          borderColor: '660000'
        }
      }, { type: 'bar3d' }
    ]);
  }

  //Get Load Successful Object Count
  getSuccessfulObjectCount() {
    this.monitorservice.getLoadSuccessObjectCount().subscribe(
      data => {
        this.dataSource.data[0].value = data;
      }, () => {
        alert("Problem in getting Successful Load object count!!");
      }
    );
  }

  //Get Load Failed Object Count
  getFailedObjectCount() {
    this.monitorservice.getLoadFailedObjectCount().subscribe(
      data => {
        this.dataSource.data[1].value = data;
      }, () => {
        alert("Problem in getting Failed Load object count!!");
      }
    );
  }

  //Get Load Successed Type Count
  getSuccessedTypeCount() {
    this.monitorservice.getLoadSuccessTypeCount().subscribe(
      data => {
        Array.from(Object.entries(data)).forEach(entry => {
          this.successTypeDataArray.push({ label: entry[0], value: entry[1] });
        });
      }, () => {
        alert("Problem in getting Load Successed Type count!!");
      }
    );
  }

  //Get Load Failed Type Count
  getFailedTypeCount() {
    this.monitorservice.getLoadFailedTypeCount().subscribe(
      data => {
        Array.from(Object.entries(data)).forEach(entry => {
          this.failedTypeDataArray.push({ label: entry[0], value: entry[1] });
        });
      }, () => {
        alert("Problem in getting Load Failed Type count!!");
      }
    );
  }

  @Output()
  isEnable = new EventEmitter<boolean>();

  // Get data item label
  getLabel(index) {
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event) {
    let dataIndex = $event.dataObj.dataIndex;
    if ("1" == dataIndex && "failed objects" == this.getLabel(dataIndex).toLowerCase()) {
      this.isErrorButtonEnable = false;
      //Emits value to parent component - LoadDashboardComponent
      this.isEnable.emit(this.isErrorButtonEnable);
      //Calling method refreshDashboard() from parent component - LoadDashboardComponent
      this.errordetailsService.callMethodOfDashboardComponent();
    }
  }
}
