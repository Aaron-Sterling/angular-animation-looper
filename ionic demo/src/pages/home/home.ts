import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { LoopAnimationService, loopableAnimation } from 'angular-animations-looper';
import { SINGLE_BOUNCE } from './animation-definition';

const LOOPABLE_BOUNCE = loopableAnimation('bounce', SINGLE_BOUNCE);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [ LOOPABLE_BOUNCE ]
})
export class HomePage {

  bounceState: string;
  numberOfBounces: number;

  constructor(public navCtrl: NavController, public loop: LoopAnimationService) {
    this.loop.registerAnimation('bounce', LOOPABLE_BOUNCE);
    this.loop.currentState('bounce').subscribe(state => { this.bounceState = state; console.log(this.bounceState)});

  }

  startBouncing() {
    this.loop.setIterations('bounce', this.numberOfBounces);
    this.loop.startAnimation('bounce');
  }

  stopBouncing() {
    this.loop.stopAnimation('bounce');
  }

  get bouncesRemaining() {
      return this.loop.getIterationsRemaining('bounce');
  }

}
