# Setup

* Previous page: [Installation and Sample Usage](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/README.md)
* Next page: [API](/docs/api.md)
* Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)

As I write this, Angular animations are connected to the template in a somewhat clunky way. The Angular team has a plan to connect animations to a directive.  If that comes to pass, this animation looper can be a lot simpler (and it might no longer be necessary).  In the meantime, setting up this looper is a bit clunky.  It's simple in the template, but there are a few lines of typescript you will need. Fortunately, you can almost copypaste them and be done.

Step by step, here is how to set up this animation looper.

## Import the library module

In ```app.module.ts```, import the following three modules (two from Angular, one from here):

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

## Inject the service into a ts file

```
import { LoopAnimationService } from 'angular-animation-looper';

export class ExamplePage {
  constructor(public loop: LoopAnimationService) {}
}
```

## Refer to the looping service in the template

```
<div [@sampleTrigger]="animationState" 
     (@sampleTrigger.done)="loop.next('sampleTrigger')"> // <-- this calls a method in the looping service
</div>
```

## Declare the animation in the Angular component

```
import { loopableAnimation } from 'angular-animations-looper';

const ANIMATION_TO_LOOP = animate(.......)                         // define the animation you want to loop
const LOOPABLE_ANIMATION = loopableAnimation(ANIMATION_TO_LOOP);   // this makes it loopable

@Component({

  animations: [ LOOPABLE_ANIMATION ]; // declare the loopable animation in the component
})
```

**IMPORTANT**: Define your animation using keyframes, not transitions. The input of ```loopableAnimation``` needs to be of type ```AnimationAnimateMetadata```.

## Register the animation with the looping service

```
this.loop.registerAnimation('sampleTrigger', LOOPED_ANIMATION, 7);  // this animation will loop 7 times once it is started
this.loop.currentState('sampleTrigger').subscribe(state => this.animationState = state); 
```
The subscription allows the service to"modify" the animaton state variable, which allows it to communicate to the template.

## Start looping!

```
this.loop.startAnimation('sampleTrigger');
```

* Previous page: [Installation and Sample Usage](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/README.md)
* Next page: [API](/docs/api.md)
* Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)
