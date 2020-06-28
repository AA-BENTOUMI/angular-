import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) { }
  
  registerForm : any ;
  id = Math.floor(Math.random()*1000)+1;
  
  ngOnInit(): void {

     this.registerForm = new FormGroup({
       iduser : new FormControl(this.id),
      username : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      password_confirm : new FormControl('', [Validators.required]),
      
     });
    
  }
  registe(){
    this._serviceService.register(this.registerForm.value)
    this.Router.navigateByUrl('/login')
  }
}
