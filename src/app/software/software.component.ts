import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  dataset:any;
  constructor(private datasetService:DatosService) { }
  ngOnInit(): void {
    this.dataset = this.datasetService.getDataset()
  }

}
