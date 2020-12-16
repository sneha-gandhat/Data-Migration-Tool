import { data } from 'jquery';
import { MonitorService } from './../../services/monitor.service';
import { ErrorDetailsService } from './../../services/error-details.service';
import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
 
@Component({
  selector: 'app-upload-drilldown',
  templateUrl: './upload-drilldown.component.html',
  styleUrls: ['./upload-drilldown.component.css']
})
export class UploadDrilldownComponent implements OnInit {
  successCount: number;
  failCount: number = 20;
  totalParsedFile: number;
  noOfObjectInParsedFile: { label: string, value: any }[] = [];
  noOfObjectInUnParsedFile: { label: string, value: any }[] = [];
  constructor(private zone: NgZone, private monitorservice: MonitorService) {
    this.getParsedFileNumbers();
    this.getUnarsedFileNumbers();
    this.getNumberOfObjectInParsedFile();
    this.getNumberOfObjectInUnParsedFile();
  }
  ngOnInit(): void {
  }

  chartInstance: any = {};
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
  dataSource = {
    "chart": {
      "caption": "Number of File Parsed",
      "captionFontColor": "#4b4276",
      "captionFont": "Callibri",
      "subcaption": "",
      "xaxisname": "",
      "yaxisname": "",
      "numberprefix": "",
      "theme": "fusion",
      "plottooltext": "$label, $dataValue",
      "paletteColors": "#21f30d,#bb2431",
      "rotateValues": "0"
    },
    "data": [{
      "label": "File Parsed Successfull",
      "value": 0,
      "link": "newchart-xml-SuccessNumberOfObjectPerFile"
    },
    {
      "label": "File Parsed Failed",
      "value": 0,
    
    }
    ],
    "linkeddata": [{
      "id": "SuccessNumberOfObjectPerFile",
      "linkedchart": {
        "chart": {
          "caption": "Number of Objects in Parsed Files",
          "captionFontColor": "#4b4276",
          "captionFont": "Callibri",
          "subcaption": "",
          "numberprefix": "",
          "theme": "fusion",
          "rotateValues": "0",
          "plottooltext": "$label, $dataValue",
          "paletteColors": "#5AA454, #FFC533,#a8385d, #7aa3e5",
        },
        "data": this.noOfObjectInParsedFile
      }
    },
    {
      "id": "FailedNumberOfObjectPerFile",
      "linkedchart": {
        "chart": {
          "caption": "Number of Objects in Unparsed Files",
          "subcaption": "",
          "captionFontColor": "#4b4276",
          "captionFont": "Callibri",
          "numberprefix": "",
          "theme": "fusion",
          "plottooltext": "$label, $dataValue",
          "paletteColors": "#5AA454, #FFC533,#a8385d, #7aa3e5",
        },
        "data": this.noOfObjectInUnParsedFile
      }
    }
    ]
  };

  getParsedFileNumbers() {
    this.monitorservice.getParsedFileNumber().subscribe(
      data => {
        this.dataSource.data[0].value = data;
      }, () => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting Successfully parsed file's count",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }
  getUnarsedFileNumbers() {
    this.monitorservice.getUnParsedFileNumber().subscribe(
      data => {
        this.dataSource.data[1].value = data;
      }, () => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting Failed parsed files's count",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }


  getNumberOfObjectInParsedFile() {

    this.monitorservice.getNumOfObjinParsed().subscribe(
      data => {
        Array.from(Object.entries(data)).forEach(entry => {
          this.noOfObjectInParsedFile.push({ label: entry[0], value: entry[1] });
        });
      }, () => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting number of object from successfully parsed file's",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }

  getNumberOfObjectInUnParsedFile() {

    this.monitorservice.getNumOfObjinUnParsed().subscribe(
      data => {
        Array.from(Object.entries(data)).forEach(entry => {
          this.noOfObjectInUnParsedFile.push({ label: entry[0], value: entry[1] });
        });
      }, () => {
        swal.fire({
          title: 'Oops...',
          text: "Problem in getting number of object from failed parsed file's",
          icon: 'error',
          confirmButtonColor: "#4b4276"
        });
      }
    );
  }
}