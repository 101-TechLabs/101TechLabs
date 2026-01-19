import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-card" [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .glass-card {
        /* Apply glass effect via mixin or var logic, but here we can't use mixin directly in component styles 
         unless we import it. For true DRY, we typically use a global class or import mixin.
         Let's stick to using the vars we defined and simple local overrides. */
        background: rgba(
          var(--app-surface-rgb, 57, 62, 70),
          0.7
        ); // Fallback for specific RGB var if needed
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;

        /* Theme adaptation */
        background: var(--app-card-bg);
        color: var(--app-text);
      }

      .glass-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class GlassCardComponent {
  @Input() customClass = '';
}
