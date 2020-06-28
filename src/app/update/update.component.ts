import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  profileForm : FormGroup ;

  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) { }
   index =this._ActivatedRoute.snapshot.paramMap.get('i')

  ngOnInit(): void {
    this.profileForm =new FormGroup ( {
      name : new FormControl(this._serviceService.table[this.index].name),
      email : new FormControl(this._serviceService.table[this.index].email),
      password : new FormControl(this._serviceService.table[this.index].password),
     });
  }
  upp(){
    this._serviceService.update(this.index,this.profileForm.value)
    this.Router.navigateByUrl('/list')
  }
}
