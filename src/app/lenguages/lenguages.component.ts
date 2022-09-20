import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';
@Component({
  selector: 'app-lenguages',
  templateUrl: './lenguages.component.html',
  styleUrls: ['./lenguages.component.css']
})
export class LenguagesComponent implements OnInit {

  dataset:any;
  constructor(private datasetService:DatosService) { }
  ngOnInit(): void {
    this.dataset = this.datasetService.getDataset()
  }

}
