import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PickOverdraftTypePageModule} from './overdraft-app/pages/pick-overdraft-type-page/pick-overdraft-type-page.module';
import {MainLayoutComponent} from './overdraft-app/core-components/main-layout/main-layout.component';
import {OverdraftCalculatorPageModule} from "./overdraft-app/pages/overdraft-calculator-page/overdraft-calculator-page.module";
import {AuctionPageModule} from "./overdraft-app/pages/auction-page/auction-page.module";

export const appRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'pick-overdraft-type'
            },
            {
                path: 'pick-overdraft-type',
                loadChildren: './overdraft-app/pages/pick-overdraft-type-page/pick-overdraft-type-page.module#PickOverdraftTypePageModule',
            },
            {
                path: 'overdraft-calculator',
                loadChildren: './overdraft-app/pages/overdraft-calculator-page/overdraft-calculator-page.module#OverdraftCalculatorPageModule'
            },
            {
                path: 'auction',
                loadChildren: './overdraft-app/pages/auction-page/auction-page.module#AuctionPageModule'
            },

        ]
    },
    {
        path: 'page-not-found',
        loadChildren: './overdraft-app/pages/not-found-page/not-found-page.module#NotFoundPageModule'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/page-not-found'
    }
];