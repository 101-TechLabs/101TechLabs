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
    .features {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      height: 85vh;
      gap: 2rem;
      padding: 0 0 2rem 0;
    }
  `]
})
export class ServicesComponent {

}
