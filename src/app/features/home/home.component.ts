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
        <h1 class="title">Welcome to <span>101<span class="text-gradient">TechLabs</span></span></h1>
        <p class="subtitle">Turning ideas into powerful digital products</p>
        <p class="subtitle2">Where innovation meets reliable engineering</p>
        <button mat-raised-button color="primary" routerLink="/portfolio">View Our Work</button>
      </header>
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
      margin-bottom: 1rem;
      color: var(--mat-sys-on-surface-variant);
    }
    .subtitle2 {
      font-size: 1rem;
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
