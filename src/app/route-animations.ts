import { animate, style, transition, trigger } from "@angular/animations";
import { constants } from "buffer";

export const routeAnimationsState = trigger('routeAnimationTrigger', [
    transition(':enter', [
        style({ 
            opacity: 0 
        }), 
        animate(600),
    ]),
    transition(':leave', [
        animate(0, style({ 
            opacity: 0 
        })),
    ]),
]);