import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule],
    template: `
    <h1>Our Services</h1>
    <div class="services-grid">
      <mat-card *ngFor="let service of services" class="service-card">
        <mat-card-header>
          <mat-card-title>{{service.title}}</mat-card-title>
          <mat-card-subtitle>{{service.category}}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{service.description}}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button color="primary">Learn More</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
    styles: [`
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    .service-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    mat-card-content {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  `]
})
export class ServicesComponent {
    services = [
        { title: 'Web Development', category: 'Engineering', description: 'Full-stack web applications using Angular and Node.js.' },
        { title: 'UI/UX Design', category: 'Design', description: 'User-centered design tailored to your brand identity.' },
        { title: 'Cloud Solutions', category: 'Infrastructure', description: 'Scalable cloud architecture on AWS and Azure.' },
        { title: 'Consulting', category: 'Strategy', description: 'Technical strategy and code audits for startups.' }
    ];
}
