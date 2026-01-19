import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PortfolioCard } from '../../shared/components/portfolio-card/portfolio-card';

interface Project {
  title: string;
  description: string;
  category: string;
  link: string;
  imageUrl: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, PortfolioCard],
  template: `
    <div class="portfolio-container">
      <div class="portfolio-header">
        <h1 class="section-title">Our Portfolio</h1>
        <p class="section-subtitle">Explore our diverse range of successful projects</p>
      </div>

      <div class="filter-section">
        <mat-button-toggle-group 
          [value]="selectedCategory" 
          (change)="filterProjects($event.value)"
          class="category-filters">
          <mat-button-toggle value="all">All Projects</mat-button-toggle>
          <mat-button-toggle value="Healthcare">Healthcare</mat-button-toggle>
          <mat-button-toggle value="HRMS">HRMS</mat-button-toggle>
          <mat-button-toggle value="E-commerce">E-commerce</mat-button-toggle>
          <mat-button-toggle value="Photography">Photography</mat-button-toggle>
          <mat-button-toggle value="Education">Education</mat-button-toggle>
        </mat-button-toggle-group>
      </div>

      <div class="portfolio-grid">
        <app-portfolio-card 
          *ngFor="let project of filteredProjects"
          [title]="project.title"
          [description]="project.description"
          [category]="project.category"
          [link]="project.link"
          [imageUrl]="project.imageUrl"
          [tags]="project.tags">
        </app-portfolio-card>
      </div>

      <div class="no-results" *ngIf="filteredProjects.length === 0">
        <p>No projects found in this category.</p>
      </div>
    </div>
  `,
  styles: [`
    .portfolio-container {
      padding: 60px 40px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .portfolio-header {
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

    .filter-section {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;

      .category-filters {
        background: var(--mat-sys-surface-container);
        border-radius: 30px;
        padding: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--mat-sys-outline-variant);

        ::ng-deep {
          .mat-button-toggle {
            border: none;
            border-radius: 24px;
            margin: 0 4px;
            font-weight: 600;
            transition: all 0.3s ease;

            &.mat-button-toggle-checked {
              background: linear-gradient(135deg, #1EC9FF, #1B7CFF);
              color: #fff;
              
              .mat-button-toggle-label-content {
                color: #fff;
              }
            }

            .mat-button-toggle-label-content {
              padding: 8px 20px;
              line-height: 1.5;
            }
          }
        }
      }
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 32px;
      margin-top: 40px;
    }

    .no-results {
      text-align: center;
      padding: 60px 20px;
      
      p {
        font-size: 1.25rem;
        color: var(--mat-sys-on-surface-variant);
      }
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
      .portfolio-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      }
    }

    @media (max-width: 768px) {
      .portfolio-container {
        padding: 40px 20px;
      }

      .portfolio-header {
        .section-title {
          font-size: 2rem;
        }

        .section-subtitle {
          font-size: 1rem;
        }
      }

      .filter-section {
        .category-filters {
          ::ng-deep {
            .mat-button-toggle {
              .mat-button-toggle-label-content {
                padding: 6px 12px;
                font-size: 0.875rem;
              }
            }
          }
        }
      }

      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    @media (max-width: 480px) {
      .filter-section {
        overflow-x: auto;
        justify-content: flex-start;
        
        .category-filters {
          min-width: max-content;
        }
      }
    }
  `]
})
export class PortfolioComponent {
  selectedCategory = 'all';

  allProjects: Project[] = [
    {
      title: 'Rashtriya Swasthya Sangathan',
      description: 'A comprehensive healthcare platform providing information about health services, programs, and initiatives for public welfare.',
      category: 'Healthcare',
      link: 'https://www.rashtriyaswasthyasangathan.org/about.html',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Healthcare', 'Public Service', 'Information Portal']
    },
    {
      title: 'HRMS Platform',
      description: 'Advanced Human Resource Management System with comprehensive features for employee management, payroll, and performance tracking.',
      category: 'HRMS',
      link: 'https://example-hrms.onrender.com/features/home',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['HRMS', 'Enterprise', 'Management']
    },
    {
      title: 'My Cart',
      description: 'Modern e-commerce platform with seamless shopping experience, secure payments, and intuitive product browsing.',
      category: 'E-commerce',
      link: 'https://mycart-vp.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['E-commerce', 'Shopping', 'Retail']
    },
    {
      title: 'Mr. Bhatt Productions',
      description: 'Professional photography business website showcasing stunning portfolio, services, and booking capabilities for events and sessions.',
      category: 'Photography',
      link: 'https://mrbhattproduction.netlify.app',
      imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
      tags: ['Photography', 'Portfolio', 'Creative']
    },
    {
      title: 'Haji Jainullah Inter College',
      description: 'Educational institution website providing comprehensive information about academics, facilities, admissions, and school activities.',
      category: 'Education',
      link: 'https://stirring-dodol-hjicpv.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Education', 'School', 'Information']
    },
    {
      title: 'CamZo Security',
      description: 'Specialized e-commerce platform for security cameras and surveillance equipment with expert guidance and installation services.',
      category: 'E-commerce',
      link: 'https://chic-starburst-597c58.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      tags: ['E-commerce', 'Security', 'Technology']
    }
  ];

  filteredProjects: Project[] = [...this.allProjects];

  filterProjects(category: string) {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter(
        project => project.category === category
      );
    }
  }
}
