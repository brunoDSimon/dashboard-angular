import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
 
  constructor(
   private router: Router,
  ) { }

 
}
