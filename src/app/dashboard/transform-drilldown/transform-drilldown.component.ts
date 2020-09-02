import { Component, OnInit, NgZone, Input } from '@angular/core';

@Component({
    selector: 'app-transform-drilldown',
    templateUrl: './transform-drilldown.component.html',
    styleUrls: ['./transform-drilldown.component.css']
})
export class TransformDrilldownComponent implements OnInit {
    constructor(private zone: NgZone) { }

    ngOnInit(): void {
    }
    chartInstance: any = {};

    // Callback to get chart instance
    initialized(e) {
        this.chartInstance = e.chart; // Save it for further use

        // Configure Drilldown attributes 
        // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
        this.chartInstance.configureLink({
            type: "doughnut2d",
            overlayButton: {
                message: 'close',
                fontColor: '880000',
                bgColor: 'FFEEEE',
                borderColor: '660000'
            }
        }, 0)
    }
    dataSource = {
        "chart": {
            "caption": "Transformed Objects",
            // "subcaption": "",
            // "xaxisname": "",
            // "yaxisname": "",
            // "numberprefix": "",
            "theme": "fusion",
            paletteColors: "#0dd63f,#c73535",

            "rotateValues": "0"
        },
        "data": [{
            "label": "Successed Objects",
            "value": "1000",
            "link": "newchart-xml-transformedObjects"
        },
        {
            "label": "Failed Objects",
            "value": "400",
            "link": "newchart-xml-failedObjects"
        }
        ],
        "linkeddata": [{
            "id": "transformedObjects",
            "linkedchart": {
                "chart": {
                    "caption": "Type specific Transformed Objects",
                    "subcaption": "",
                    "numberprefix": "",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Part",
                    "value": "157"
                }, {
                    "label": "Procedure",
                    "value": "172"
                }, {
                    "label": "Tool",
                    "value": "206"
                }, {
                    "label": "Nut",
                    "value": "275"
                }]
            }
        },
        {
            "id": "failedObjects",
            "linkedchart": {
                "chart": {
                    "caption": "Error/Exceptions",
                    "subcaption": "",
                    "numberprefix": "",
                    "theme": "fusion",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [{
                    "label": "Internal Server Error",
                    "value": "102"
                },
                {
                    "label": "Bad Record Exception",
                    "value": "142"
                },
                {
                    "label": "Null Value Exception",
                    "value": "187"
                }
                ]
            }
        }
        ]
    };


}
