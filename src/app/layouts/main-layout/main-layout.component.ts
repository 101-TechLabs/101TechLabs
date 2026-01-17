import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="toolbar">
        <div class="brand-container" routerLink="/" style="cursor: pointer;">
          <img src="icon.png" alt="101TechLabs Logo" class="brand-icon">
          <span class="brand-text">101<span class="text-gradient">TechLabs</span></span>
        </div>
        
        <span class="spacer"></span>
        
        <div class="nav-links desktop-only disabled-nav">
          <a mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a mat-button routerLink="/about" routerLinkActive="active-link">About</a>
          <a mat-button routerLink="/portfolio" routerLinkActive="active-link">Portfolio</a>
          <a mat-button routerLink="/services" routerLinkActive="active-link">Services</a>
          <a mat-button routerLink="/contact" routerLinkActive="active-link">Contact</a>
        </div>

        <button mat-icon-button (click)="themeService.toggleTheme()">
          <mat-icon>{{ themeService.theme() === 'light' ? 'dark_mode' : 'light_mode' }}</mat-icon>
        </button>

        <button mat-icon-button class="mobile-only" (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="over" position="end">
          <mat-nav-list (click)="sidenav.close()">
            <a mat-list-item routerLink="/">Home</a>
            <a mat-list-item routerLink="/about">About</a>
            <a mat-list-item routerLink="/portfolio">Portfolio</a>
            <a mat-list-item routerLink="/services">Services</a>
            <a mat-list-item routerLink="/contact">Contact</a>
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content>
          <main>
            <router-outlet></router-outlet>
          </main>
          <footer class="app-footer">
            <p>&copy; 2026 101TechLabs. All rights reserved.</p>
          </footer>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      .disabled-nav {
        pointer-events: none;   
        opacity: 0.5;           
      }
    }
    .sidenav-container {
      flex: 1;
    }
    mat-sidenav-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .active-link {
      background: rgba(255,255,255, 0.1);
    }
    main {
      flex: 1;  
      padding: 0;
    }
    .app-footer {
      margin-top: auto;
      text-align: center;
      background: var(--mat-sys-surface-variant);
      color: var(--mat-sys-on-surface-variant);
    }
    .mobile-only { display: none; }
    .brand-container {
      display: flex;
      align-items: center;
    }
    .brand-icon {
      height: 32px; 
      width: auto;
      margin-right: 12px;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
    }
    .brand-text {
      font-weight: 700;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
      display: inline-block;
    }
    
    @media (max-width: 768px) {
      .desktop-only { display: none; }
      .mobile-only { display: block; }
    }
  `]
})
export class MainLayoutComponent {
  constructor(public themeService: ThemeService) { }
}
