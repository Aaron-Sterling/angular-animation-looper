import { state, style, keyframes, animate } from '@angular/animations';

// the following animation makes an element bounce up and down one time
export const SINGLE_BOUNCE = animate('1s', keyframes([   
                                                            style({transform: 'translateY(0)'}),
                                                            style({transform: 'translateY(-100%)'}),
                                                            style({transform: 'translateY(0)'})
                                                      ])
);
