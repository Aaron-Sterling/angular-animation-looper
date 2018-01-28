# angular-animation-looper
Dynamic looping of Angular animations. Define an animaton with keyframes, specify a number of iterations, and the animation will repeat for that many iterations. You can change the number of iterations programmatically.

Next page: [Setup](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/docs/setup.md)
Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)

## Installation
```
npm install angular-animation-looper --save
```

## Sample usage

In your template:
```
<div [@sampleTrigger]="animationState" 
     (@sampleTrigger.done)="loop.next('sampleTrigger')">
</div>
```

In ```app.module.ts```:
```
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoopAnimationModule } from 'angular-animations-looper';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // IMPORTANT: You must import these modules in this order
    LoopAnimationModule
  ],
  bootstrap: [],
  entryComponents: [],
  providers: []
})
export class AppModule {}
```

In the ts file for your template:
```
import { LoopAnimationService, loopableAnimation } from 'angular-animations-looper';

import ANIMATION_TO_LOOP from './animation-definition';  // this looks like : animate(starting state, keyframes)
const LOOPED_ANIMATION = loopableAnimaton(ANIMATION_TO_LOOP);

@Component({

  animations: [ LOOPED_ANIMATION ]; // declare the loopable animation in the component
})
export class SampleClass {

    constructor(this.loop: LoopAnimationService) {  // <-- inject this service

    this.loop.registerAnimation('sampleTrigger', LOOPED_ANIMATION, 7);  // this animation will loop 7 times once it is started
    this.loop.currentState('sampleTrigger').subscribe(state => this.animationState = state); // required so the service can talk to the trigger in the template
    this.loop.startAnimation('sampleTrigger');  // starts the looping animation
    }
}
```

Next page: [Setup](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/docs/setup.md)
Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)
