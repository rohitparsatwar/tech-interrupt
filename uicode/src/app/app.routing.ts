import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnernetworkComponent } from './partnernetwork/partnernetwork.component';
import { WizardComponent } from './wizard/wizard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DbslateComponent } from './dbslate/dbslate.component';
import { CreatenetworkComponent } from './createnetwork/createnetwork.component';

const routes: Routes = [
    {
        path: 'about',
        component: PartnernetworkComponent,
    },
    {
        path: 'profile/:id',
        component: PartnernetworkComponent,
        children: [
            {
                path: 'myprofile',
                component: MyprofileComponent,
                outlet: 'sub'
              },
              {
                path: 'createnetwork',
                component: CreatenetworkComponent,
                outlet: 'sub'
              }
        ]
    },
    {
        path: 'onboard',
        component: WizardComponent,
    },
    {
        path: 'viewpartner',
        component: WizardComponent,
    },
    {
        path: 'dbslate',
        component: DbslateComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
