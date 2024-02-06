import { Component, HostBinding, Input } from '@angular/core';
import { routeAnimationsState } from '../route-animations';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [routeAnimationsState]
})
export class ProjectsComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  items = [{ value: 'C#', selected: false }, { value: 'Angular', selected: false }, { value: 'ASP .NET', selected: false }, 
  { value: 'SQL', selected: false }, { value: 'TypeScript', selected: false }, { value: 'HTML', selected: false }, { value: 'CSS', selected: false }];

  projects = [
    { title: 'Deze portfolio website', description: 'description1', techniques: ['Angular', 'TypeScript', 'HTML', 'CSS' ] },
    { title: 'News On This Date', description: 'description2', techniques: ['ASP .NET', 'C#'] }

  ];

  toggleChip(item: any) {
    item.selected = !item.selected;

    if (item.selected) {
      this.selectedChips.push(item);
    } else {
      const index = this.selectedChips.indexOf(item);
      if (index !== -1) {
        this.selectedChips.splice(index, 1);
      }
    }

    this.filterProjects();
  }

  selectedChips: any[] = [];

  filterProjects() {
    if (this.selectedChips.length === 0) {
      // No chips selected, show all projects
      this.projects = [
        { title: 'Deze portfolio website', description: 'description1', techniques: ['Angular', 'TypeScript', 'HTML', 'CSS' ] },
        { title: 'News On This Date', description: 'description2', techniques: ['ASP .NET', 'C#'] }
      ];
    } else {
      this.projects = this.projects.filter(project => {
        return this.selectedChips.every(chip => project.techniques.includes(chip.value));
      });
    }

    console.log(this.projects);
  }
}
