import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class HeaderComponent implements OnInit {
 
  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit() {
  
  }

 

}
