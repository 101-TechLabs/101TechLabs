import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FancyCard } from '../../shared/components/fancy-card/fancy-card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FancyCard],
  template: `
      <div class="services-container">
        <div class="services-header">
          <h1 class="section-title">Our Services</h1>
          <p class="section-subtitle">Innovative solutions designed to transform your business</p>
        </div>

        <section class="features">
          <app-fancy-card 
            [title]="'Custom Software'" 
            [icon]="'developer_mode'"
            [description]="'Bespoke solutions tailored to your unique business needs and challenges.'"
            [gradientType]="3">
          </app-fancy-card>
          <app-fancy-card 
            [title]="'Web Development'" 
            [icon]="'language'"
            [description]="'Modern, responsive websites built with the latest technologies and best practices.'"
            [gradientType]="3">
          </app-fancy-card>
          <app-fancy-card 
            [title]="'Cloud Solutions'" 
            [icon]="'cloud_queue'"
            [description]="'Scalable and secure cloud infrastructure to power your digital transformation.'"
            [gradientType]="3">
          </app-fancy-card>
        </section>
      </div>
  `,
  styles: [`
    .services-container {
      padding: 60px 40px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .services-header {
      text-align: center;
      margin-bottom: 50px;

      .section-title {
        font-size: 3rem;
        font-weight: 800;
        margin: 0 0 16px 0;
        background: linear-gradient(135deg, #1EC9FF, #1B7CFF, #2EE6A6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .section-subtitle {
        font-size: 1.25rem;
        color: var(--mat-sys-on-surface-variant);
        margin: 0;
      }
    }

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

    .features {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      gap: 2rem;
      padding: 0 0 2rem 0;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .services-container {
        padding: 40px 20px;
      }

      .services-header {
        .section-title {
          font-size: 2rem;
        }

        .section-subtitle {
          font-size: 1rem;
        }
      }

      .features {
        flex-direction: column;
        height: auto;
      }
    }
  `]
})
export class ServicesComponent {

}
