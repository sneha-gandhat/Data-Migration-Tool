import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-migration-status-gauge',
  templateUrl: './migration-status-gauge.component.html',
  styleUrls: ['./migration-status-gauge.component.css']
})
export class MigrationStatusGaugeComponent implements OnInit {
  width = 280;
  height = 200;
  type = "angulargauge";
  dataFormat = "json";
  dataSource = {
    chart: {
      caption: "Migration Status",
      captionFontColor: "#4b4276",
      captionFont: "Callibri",
      lowerlimit: "0",
      upperlimit: "100",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion",
      showtooltip: "1",
      // showTickMarks: "0",
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "33.333",
          code: "#da4350",

        },
        {
          minvalue: "33.333",
          maxvalue: "66.666",
          code: "#FFC533"
        },
        {
          minvalue: "66.666",
          maxvalue: "100",
          code: "#5AA454"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "0"
        }
      ]
    }
  };

  constructor() {
    //Load Migration Status
    this.setMigrationStatus();
  }

  ngOnInit(): void {
  }

  //Set Migration Status value
  setMigrationStatus() {
    //Get session value for upload/transform/load
    let isUpload = sessionStorage.getItem("upload");
    let isTransform = sessionStorage.getItem("transform");
    let isLoad = sessionStorage.getItem("load");

    if (isUpload) {
      this.dataSource.dials.dial[0].value = this.dataSource.colorrange.color[0].maxvalue;
    }
    if (isTransform) {
      this.dataSource.dials.dial[0].value = this.dataSource.colorrange.color[1].maxvalue;
    }
    if (isLoad) {
      this.dataSource.dials.dial[0].value = this.dataSource.colorrange.color[2].maxvalue;
    }
  }
}
