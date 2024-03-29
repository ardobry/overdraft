import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AtomsModule} from '../../../lib/atoms/atoms.module';
import {MoleculesModule} from '../../../lib/molecules/molecules.module';
import {UserOverdraftsPageComponent} from './user-overdrafts-page.component';
import {userOverdraftsRoutes} from './user-overdrafts-page.routing';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        UserOverdraftsPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userOverdraftsRoutes),
        AtomsModule,
        MoleculesModule
    ],
    exports: [
        UserOverdraftsPageComponent
    ],
})
export class UserOverdraftsPageModule {
}
