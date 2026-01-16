import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    theme = signal<'light' | 'dark'>('light');

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            this.loadTheme();
        }

        effect(() => {
            if (isPlatformBrowser(this.platformId)) {
                document.documentElement.setAttribute('data-theme', this.theme()); // Use documentElement for global theme selector
                localStorage.setItem('theme', this.theme());
            }
        });
    }

    toggleTheme() {
        this.theme.update(current => current === 'light' ? 'dark' : 'light');
    }

    private loadTheme() {
        const saved = localStorage.getItem('theme') as 'light' | 'dark';
        if (saved) {
            this.theme.set(saved);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.theme.set('dark');
        }
    }
}
