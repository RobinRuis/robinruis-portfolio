import { Component, HostBinding } from '@angular/core';
import { routeAnimationsState } from '../route-animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [routeAnimationsState]
})
export class ExperienceComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation= true;
}
