import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-portfolio-card',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './portfolio-card.html',
    styleUrls: ['./portfolio-card.scss']
})
export class PortfolioCard {
    @Input() title!: string;
    @Input() description!: string;
    @Input() category!: string;
    @Input() link!: string;
    @Input() imageUrl?: string;
    @Input() tags?: string[];
}
