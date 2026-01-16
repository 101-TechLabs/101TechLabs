import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  template: `
    <div class="content-container">
      <h1 class="text-gradient">About Us</h1>
      
      <div class="grid">
        <div class="text-section">
          <p class="intro">
            <span class="text-gradient" style="font-weight: bold;">101TechLabs</span> is dedicated to delivering high-quality, scalable web applications. 
            Our team of experts specializes in Angular development, ensuring robust and maintainable code.
          </p>
          
          <h3>Our Core Values</h3>
          <mat-list>
            <mat-list-item>
              <mat-icon matListItemIcon class="icon-gradient">check_circle</mat-icon>
              <span matListItemTitle>Code Quality</span>
            </mat-list-item>
             <mat-list-item>
              <mat-icon matListItemIcon class="icon-gradient">check_circle</mat-icon>
              <span matListItemTitle>User Experience</span>
            </mat-list-item>
             <mat-list-item>
              <mat-icon matListItemIcon class="icon-gradient">check_circle</mat-icon>
              <span matListItemTitle>Innovation</span>
            </mat-list-item>
          </mat-list>
        </div>

        <mat-card>
          <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Team Photo">
          <mat-card-content>
            <p>Our collaborative environment fosters creativity and excellence.</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .content-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-top: 2rem;
    }
    .intro {
      font-size: 1.1rem;
      line-height: 1.6;
    }
    .icon-gradient {
      color: #00ADB5; /* Fallback or specific tint if gradient not possible on icon font directly without bg-clip hack */
    }
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent { }
