import { MonitorService } from './../../services/monitor.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-transform-drilldown',
    templateUrl: './transform-drilldown.component.html',
    styleUrls: ['./transform-drilldown.component.css']
})
export class TransformDrilldownComponent implements OnInit {
    successTypeDataArray: { label: string, value: any }[] = [];
    failedTypeDataArray: { label: string, value: any }[] = [];
    chartInstance: any = {};
    dataSource = {
        "chart": {
            "caption": "Transformed Objects",
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
                    "caption": "Type specific Transformed Objects",
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
                    "caption": "Type specific failed Transformed Objects",
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

    constructor(private monitorservice: MonitorService) {
        //Render Transform Successful Object Count
        this.getSuccessfulObjectCount();
        //Render Transform Failed Object Count
        this.getFailedObjectCount();
        //Render Transform Successed Type Count
        this.getSuccessedTypeCount();
        //Render Transform Failed Type Count
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

    //Get Transform Successful Object Count
    getSuccessfulObjectCount() {
        this.monitorservice.getTransformSuccessObjectCount().subscribe(
            data => {
                this.dataSource.data[0].value = data;
            }, () => {
                alert("Problem in getting Successful Transformed object count!!");
            }
        );
    }

    //Get Transform Failed Object Count
    getFailedObjectCount() {
        this.monitorservice.getTransformFailedObjectCount().subscribe(
            data => {
                this.dataSource.data[1].value = data;
            }, () => {
                alert("Problem in getting Failed Transformed object count!!");
            }
        );
    }

    //Get Transform Successed Type Count
    getSuccessedTypeCount() {
        this.monitorservice.getTransformSuccessTypeCount().subscribe(
            data => {
                Array.from(Object.entries(data)).forEach(entry => {
                    this.successTypeDataArray.push({ label: entry[0], value: entry[1] });
                });
            }, () => {
                alert("Problem in getting Transform Successed Type count!!");
            }
        );
    }

    //Get Transform Failed Type Count
    getFailedTypeCount() {
        this.monitorservice.getTransformFailedTypeCount().subscribe(
            data => {
                Array.from(Object.entries(data)).forEach(entry => {
                    this.failedTypeDataArray.push({ label: entry[0], value: entry[1] });
                });
            }, () => {
                alert("Problem in getting Transform Failed Type count!!");
            }
        );
    }

}
