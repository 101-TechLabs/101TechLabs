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
    <section class="content-container about-section-1">
      <div class="grid">
        <div class="text-section">
          <p class="intro">
            Since its inception in January 2026, 101TechLabs has been committed to empowering
            innovators through technology.
          </p>
        </div>
        <div>
          <img mat-card-image src="about_hero.svg" alt="Team Photo" />
        </div>
      </div>
    </section>
    <div style="margin-top: -2rem;">
      <hr style="border: none; border-top: 2px dashed var(--mat-sys-outline);" />
    </div>
    <section class="about-section-2">
      <mat-card class="about-101techlabs">
        <mat-card-title> We’re Not Your Average Software Company </mat-card-title>

        <mat-card-content>
          <mat-card-content>
            At 101TechLabs, we were born out of real-world challenges faced while building
            technology products. Through hands-on experience, we learned that creating successful
            digital solutions takes far more than just writing code—it requires clarity of vision,
            thoughtful design, and a well-executed development process.
          </mat-card-content>

          <mat-card-content>
            Over time, we recognized a common gap: innovators often have great ideas but lack
            guidance to transform those ideas into scalable, market-ready products. What’s needed is
            a partner who can support the entire journey—from idea definition and design to
            development and launch.
          </mat-card-content>

          <mat-card-content>That’s exactly why 101TechLabs exists.</mat-card-content>

          <mat-card-content>
            We’ve built a team dedicated to helping founders, startups, and businesses turn concepts
            into impactful digital products. Working closely with our clients, we collaborate,
            challenge assumptions, and focus on delivering technology that truly makes a difference.
            The trust and feedback we receive continue to motivate us every day.
          </mat-card-content>

          <mat-card-content>
            If you’re looking to build something meaningful and innovative, we’d love to connect.
            Let’s create something exceptional—together.
          </mat-card-content>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      .content-container {
        margin: 0 auto;
        padding: 2rem 1rem;
        margin: 2rem;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-top: 2rem;
      }
      .intro {
        font-size: 1.2rem;
        line-height: 1.6;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      .about-section-1 {
        height: 82vh;
      }
      .about-section-2 {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .about-101techlabs {
          max-width: 1200px;
          margin: 3rem auto;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          line-height: 1.7;
        }

        /* Title styling */
        .about-101techlabs mat-card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .about-101techlabs {
            padding: 1.5rem;
            margin: 2rem 1rem;
          }

          .about-101techlabs mat-card-title {
            font-size: 1.5rem;
          }
        }
      }
      @media (max-width: 768px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {}
