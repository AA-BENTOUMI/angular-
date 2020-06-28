import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service.Service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
wather : any

    location = new FormControl('',Validators.required)

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  wether(){
    this.service.weather(this.location.value).subscribe(data =>{
      this.wather = data 
      console.log(data)
    });
  }

}
