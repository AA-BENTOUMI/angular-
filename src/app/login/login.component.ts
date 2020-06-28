import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) { }
  loginForm : FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
     username : new FormControl('', [Validators.required]),
     password : new FormControl('', [Validators.required]),
    });
  }

  log(){
    this._serviceService.login(this.loginForm.value);
    this.Router.navigateByUrl('/add')
  }
}
