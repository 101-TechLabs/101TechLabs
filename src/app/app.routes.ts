import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
            },
            {
                path: 'about',
                loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
            },
            {
                path: 'portfolio',
                loadChildren: () => import('./features/portfolio/portfolio.routes').then(m => m.PORTFOLIO_ROUTES)
            },
            {
                path: 'services',
                loadChildren: () => import('./features/services/services.routes').then(m => m.SERVICES_ROUTES)
            },
            {
                path: 'contact',
                loadChildren: () => import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES)
            }
        ]
    }
];
