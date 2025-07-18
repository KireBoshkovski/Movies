import { Routes } from '@angular/router';
import { Search } from './components/search/search';
import { Details } from './components/details/details';
import { Episode } from './components/episode/episode';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: Search,
    },
    {
        path: 'show/:id',
        component: Details,
    },
    {
        path: 'episode/:id',
        component: Episode,
    },
    {
        path: '**',
        redirectTo: 'search',
    },
];
