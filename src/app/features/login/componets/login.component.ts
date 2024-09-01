import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _error: any
  private _openError: boolean = false;
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private loginService:LoginService,
    private formBuilder: FormBuilder
  ) {
    this.crieForm();
  }

  ngOnInit() {
  }

  get openError(){
    return this._openError
  }

  public crieForm() {
    this.formGroup = this.formBuilder.group({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required])
    });
  }

  get error(){
    return this._error;
  }

  public login(){
    const body = {
      "email": this.formGroup.get('email')?.value,
      "password":this.formGroup.get('password')?.value
    }
   this.loginService.auth(body).subscribe((res) => {
    console.log(res)
   },(error:Error) => {
    console.log(error)
   })
  }


}
