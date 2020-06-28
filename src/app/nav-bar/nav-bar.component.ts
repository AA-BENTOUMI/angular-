import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _serviceService: ServiceService ,private routes: Router) { }

  ngOnInit(): void {
  }
 logout(){
  this._serviceService.logout();
  this.routes.navigateByUrl('/login')
 }
//  isLoged(){
//   this._serviceService.isloged();
//  }
}
