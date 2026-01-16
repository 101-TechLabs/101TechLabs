import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, MatGridListModule, MatCardModule],
    template: `
    <h1>Portfolio</h1>
    <p>Check out our latest projects.</p>
    
    <div class="portfolio-grid">
      <mat-card *ngFor="let item of projects" class="project-card">
        <!-- Placeholder image using angular material assets or just a div -->
        <div class="project-image" [style.background-color]="item.color"></div>
        <mat-card-header>
          <mat-card-title>{{item.title}}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{item.description}}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
    styles: [`
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .project-image {
      height: 200px;
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
    mat-card-content {
      margin-top: 1rem;
    }
  `]
})
export class PortfolioComponent {
    projects = [
        { title: 'E-Commerce Platform', description: 'A scalable shop solution.', color: '#00ADB5' },
        { title: 'Finance Dashboard', description: 'Real-time data visualization.', color: '#393E46' },
        { title: 'Social Connect', description: 'Community engagement app.', color: '#222831' }
    ];
}
