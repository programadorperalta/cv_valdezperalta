import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';
@Component({
  selector: 'app-plenguages',
  templateUrl: './plenguages.component.html',
  styleUrls: ['./plenguages.component.css']
})
export class PlenguagesComponent implements OnInit {

  dataset:any;
  constructor(private datasetService:DatosService) { }
  ngOnInit(): void {
    this.dataset = this.datasetService.getDataset()
  }

}
