import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public formGroup!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
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
      email: ['', ],
      password: ['', Validators.required]
    })
  }
  get error(){
    return this._error;
  }

  public login(){
   
  }


}
