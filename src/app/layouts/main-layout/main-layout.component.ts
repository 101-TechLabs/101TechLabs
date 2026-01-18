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
    MatListModule,
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" class="toolbar">
        <div class="brand-container" routerLink="/" style="cursor: pointer;">
          <img src="icon.png" alt="101TechLabs Logo" class="brand-icon" />
          <span class="brand-text">101<span class="text-gradient">TechLabs</span></span>
        </div>

        <span class="spacer"></span>

        <div class="nav-links desktop-only">
          <a
            mat-button
            routerLink="/"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
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
          <div class="content-wrapper">
            <main class="main-content">
              <router-outlet></router-outlet>
            </main>

            <div class="footer-wrapper">
              <footer class="app-footer">
                <p>&copy; 2026 101TechLabs. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      .app-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* =========================
        TOOLBAR (STICKY TOP)
      ========================= */
      .toolbar {
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      /* =========================
        SIDENAV CONTAINER
      ========================= */
      .sidenav-container {
        flex: 1;
        height: calc(100vh - 64px); /* Toolbar height */
      }

      /* =========================
        SIDENAV CONTENT
      ========================= */
      mat-sidenav-content {
        height: 100%;
      }

      /* =========================
        CONTENT WRAPPER
      ========================= */
      .content-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      /* =========================
        MAIN CONTENT (SCROLLABLE)
      ========================= */
      .main-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      /* =========================
        FOOTER (STICKY BOTTOM)
      ========================= */
      .footer-wrapper {
        position: sticky;
        bottom: 0;
        z-index: 1;
      }

      .app-footer {
        text-align: center;
        background: var(--mat-sys-surface-variant);
        color: var(--mat-sys-on-surface-variant);
      }

      /* =========================
        NAV / LINKS
      ========================= */
      .spacer {
        flex: 1 1 auto;
      }

      .nav-links {
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .active-link {
        background: rgba(255, 255, 255, 0.1);
      }

      .disabled-nav {
        pointer-events: none;
        opacity: 0.5;
      }

      /* =========================
        BRANDING
      ========================= */
      .brand-container {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .brand-icon {
        height: 32px;
        width: auto;
        margin-right: 12px;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
      }

      .brand-text {
        font-weight: 700;
        font-size: 1.2rem;
        letter-spacing: 0.5px;
        display: inline-block;
      }

      /* =========================
        RESPONSIVE
      ========================= */
      .mobile-only {
        display: none;
      }

      .desktop-only {
        display: flex;
      }

      @media (max-width: 768px) {
        .desktop-only {
          display: none;
        }

        .mobile-only {
          display: block;
        }

        .sidenav-container {
          height: calc(100vh - 56px); /* Mobile toolbar height */
        }
      }
    `,
  ],
})
export class MainLayoutComponent {
  constructor(public themeService: ThemeService) {}
}
