import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-custom-button',
    standalone: true,
    imports: [CommonModule],
    template: `
    <button [type]="type" class="neon-btn" (click)="onClick.emit($event)" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `,
    styles: [`
    .neon-btn {
      background: transparent;
      color: var(--app-accent);
      border: 2px solid var(--app-accent);
      padding: 10px 24px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      letter-spacing: 1px;
    }

    .neon-btn:hover:not(:disabled) {
      background: var(--app-accent);
      color: var(--app-bg); // Use bg color for text to ensure contrast
      box-shadow: 0 0 10px var(--app-accent), 0 0 20px var(--app-accent);
    }

    .neon-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: gray;
      color: gray;
    }
  `]
})
export class CustomButtonComponent {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() disabled = false;
    @Output() onClick = new EventEmitter<Event>();
}
