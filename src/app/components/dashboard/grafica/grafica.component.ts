import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { GraficaService } from 'src/app/services/grafica/grafica.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  title: ApexTitleSubtitle | any;
};

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions!: Partial<ChartOptions>;

  comparate: boolean | undefined;
  delitoMes!: number[];

  formGraf: FormGroup;
  login = false;
  pass = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private graficaService: GraficaService) {
    this.formGraf = this.fb.group({
      inicio: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.comparate = false;
  }

  filtrarGRaf() {

  }

  ngOnInit(): void {
    console.log("Data de Graficas");
    this.delitoMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.graficaService.getDataGrafica().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        console.log(res[i].Mes);
        switch (res[i].Mes) {
          case "Enero":
            this.delitoMes[0] = this.delitoMes[0] + 1;
            break;
          case "Febrero":
            this.delitoMes[1] = this.delitoMes[1] + 1;
            break;
          case "Marzo":
            this.delitoMes[2] = this.delitoMes[2] + 1;
            break;
          case "Abril":
            this.delitoMes[3] = this.delitoMes[3] + 1;
            break;
          case "Mayo":
            this.delitoMes[4] = this.delitoMes[4] + 1;
            break;
          case "Junio":
            this.delitoMes[5] = this.delitoMes[5] + 1;
            break;
          case "Julio":
            this.delitoMes[6] = this.delitoMes[6] + 1;
            break;
          case "Agosto":
            this.delitoMes[7] = this.delitoMes[7] + 1;
            break;
          case "Septiembre":
            this.delitoMes[8] = this.delitoMes[8] + 1;
            break;
          case "Octubre":
            this.delitoMes[9] = this.delitoMes[9] + 1;
            break;
          case "Noviembre":
            this.delitoMes[10] = this.delitoMes[10] + 1;
            break;
          case "Diciembre":
            this.delitoMes[11] = this.delitoMes[11] + 1;
            break;
        }
      }
      console.log(this.delitoMes);
      this.graficaBarra();
    });
  }

    graficaBarra(){
      this.chartOptions = {
        series: [
          {
            name: "Delitos",
            data: this.delitoMes
          }
        ],
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: string) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ],
          position: "top",
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val: string) {
              return val + "%";
            }
          }
        },
        title: {
          text: "Inicio",
          floating: true,
          offsetY: 320,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
    }
  
  }


