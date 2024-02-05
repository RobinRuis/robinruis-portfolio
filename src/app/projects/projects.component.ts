import { Component, HostBinding } from '@angular/core';
import { routeAnimationsState } from '../route-animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [routeAnimationsState]
})
export class ProjectsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation= true;
}
