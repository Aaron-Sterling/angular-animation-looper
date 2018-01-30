# API

* Previous page: [Setup](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/docs/setup.md)
* Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)

## Animation definition

```
export function loopableAnimation(triggerName: string, animationToLoop: AnimationAnimateMetadata): AnimationTriggerMetadata
```

```loopableAnimation``` converts a keyframe-based Angular animation into an animation this package can loop. The parameter ```animationToLoop``` must look like: ```animate(timeString, keyframes)```.  (See [this example](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/ionic%20demo/src/pages/home/animation-definition.ts).)

## Loop animation service

The injectable LoopAnimationService provider has the following public methods.

#### ```registerAnimation(triggerName: string, newAnimation: AnimationTriggerMetadata, numberOfIterations?: number)```

Registers a loopable animation with the service. If ```numberOfIterations``` is not specified, it defaults to 1. Only one animation may be registered for a given ```triggerName```.

#### ```setIterations(triggerName: string, numberOfIterations: number)```

Sets the number of iterations to loop, for the animation registered under ```triggerName```.

#### ```getTotalIterations(triggerName: string): number```

Returns the total number of iterations set for the animation registered under ```triggerName```.  This is the value that can be set by ```setIterations()```.

#### ```getIterationsRemaining(triggerName: string): Observable<number>```

Returns a stream that emits how many iterations remain before the animaton registered under ```triggerName``` stops looping. Useful if you want to count down in real time, as shown in the [Ionic Demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo).

#### ```startAnimation(triggerName: string)```

Start looping the animation registered under ```triggerName```.

#### ```next(triggerName: string)```

Perform the next iteration (if one exists) for the animation registered under ```triggerName```.

#### ```currentState(triggerName: string): Observable<string>```

Returns a stream that emits the current state of the loopable animation.

* Previous page: [Setup](https://github.com/Aaron-Sterling/angular-animation-looper/blob/master/docs/setup.md)
* Complete example: [Ionic demo](https://github.com/Aaron-Sterling/angular-animation-looper/tree/master/ionic%20demo)
