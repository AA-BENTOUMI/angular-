import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service.Service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private _serviceService: ServiceService) { }
  tab =[];
  search :'';

  ngOnInit() {
    this.tab= this._serviceService.table
    
  }
  Delete(i){
    this._serviceService.Deleting(i);
  }
}
