import { Component, OnInit ,Input } from '@angular/core';
import { ServiceService } from '../Service.Service';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  profileForm :  FormGroup ;
  
  constructor(private _serviceService: ServiceService ,private Router :Router) { }

  ngOnInit() {
  
  this. profileForm =new FormGroup ( {
  name : new FormControl('',Validators.required),
  email : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required),
 });
 

  }
  add(){
    this._serviceService.adding(this.profileForm.value);
    this.Router.navigateByUrl('/list');
    console.log(this.profileForm.value)
  }
  
}
