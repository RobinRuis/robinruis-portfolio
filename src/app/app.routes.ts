import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent },
    {path: 'experience', component: ExperienceComponent}
];
  