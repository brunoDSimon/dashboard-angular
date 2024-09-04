import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Subscription} from 'rxjs'
import { EventEmitterService } from '../../service/event-emitter.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input()show? = false;
  private subscription:any
  constructor(
  ) { }

  ngOnInit() {
    this.subscription = EventEmitterService.get('showLoader').subscribe(() =>{
      this.show = true;
    });

    this.subscription = EventEmitterService.get('hideLoader').subscribe(() =>{
      this.show = false;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
