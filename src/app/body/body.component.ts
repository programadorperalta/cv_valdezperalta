import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dataset:any;
  constructor(private datasetService:DatosService) { }
  ngOnInit(): void {
    this.dataset = this.datasetService.getDataset()
  }

}
