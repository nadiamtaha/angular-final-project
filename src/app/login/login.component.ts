import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup(
    {
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
    })

    submitLoginForm(){
    
      if(this.loginForm.invalid)
      {
        return;
      }
      this._AuthService.login(this.loginForm.value).subscribe((data)=>{
         console.log(data)
  
           if(data.message=='success') 
           {
             this.toastr.success('login succeffully','Login')
             localStorage.setItem('userToken',data.token);
             this._Router.navigateByUrl('/home')
           }
           else{
            this.toastr.error(data.message,'Login')
           }
  
      })
    }
  
  constructor(private _AuthService:AuthService,private _Router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
