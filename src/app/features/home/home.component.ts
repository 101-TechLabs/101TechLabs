import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink],
  template: `
    <div class="container">
      <header class="hero">
        <img src="icon.png" alt="Logo" class="hero-logo">
        <h1 class="title">Welcome to <span class="text-gradient">101TechLabs</span></h1>
        <p class="subtitle">Building the future with <span class="text-gradient">Angular</span></p>
        <button mat-raised-button color="primary" routerLink="/portfolio">View Our Work</button>
      </header>

      <section class="features">
        <mat-card class="feature-card">
          <mat-card-header>
            <mat-card-title class="text-gradient">Modern Tech Stack</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>We use the latest Angular features and robust architecture.</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-header>
            <mat-card-title class="text-gradient">Scalable Solutions</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Designed to grow with your business needs.</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-header>
            <mat-card-title class="text-gradient">Responsive Design</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Looks great on all devices, from mobile to desktop.</p>
          </mat-card-content>
        </mat-card>
      </section>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .hero {
      text-align: center;
      padding: 6rem 1rem 4rem;
    }
    .hero-logo {
      width: 120px;
      height: auto;
      margin-bottom: 2rem;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
    }
    .title {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--mat-sys-on-surface-variant);
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }
    .feature-card {
      height: 100%;
    }
    ::ng-deep .text-gradient {
      display: inline-block; /* Ensure gradient works on text */
    }
  `]
})
export class HomeComponent { }
