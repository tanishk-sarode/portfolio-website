import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CodeCollab',
      role: 'Software Developer',
    },
    {
      title: 'JobTrendly',
      role: 'Data Analyst',
    },
    {
      title: 'Minimal CMS',
      role: 'Web Developer',
    },
    {
      title: 'Resume QA Bot',
      role: 'AI/ML',
    },
    {
      title: 'DevOps Dashboard',
      role: 'Cloud/CI-CD',
    },
  ];
}
