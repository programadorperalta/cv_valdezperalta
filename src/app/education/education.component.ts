import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  dataset:any;
  constructor(private datasetService:DatosService) { }
  ngOnInit(): void {
    this.dataset = this.datasetService.getDataset()
  }
}
