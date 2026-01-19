import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fancy-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './fancy-card.html',
  styleUrls: ['./fancy-card.scss']
})
export class FancyCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText = 'Read More';
  @Input() buttonLink = '#';
  @Input() icon?: string;
  @Input() gradientType: 1 | 2 | 3 = 1;
}
