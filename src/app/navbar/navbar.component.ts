import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   
  isLoggedIn:boolean=false;
  constructor(private _Router:Router) { 
     let token=localStorage.getItem('userToken');

     if(token)
     {
       this.isLoggedIn=true
     }
     else{
      this.isLoggedIn=false
     }
  }
  logout(){
    localStorage.removeItem('userToken');
    this._Router.navigateByUrl('/login')

  }

  ngOnInit(): void {

  }

}
