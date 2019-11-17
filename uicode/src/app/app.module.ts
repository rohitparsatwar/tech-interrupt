import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './wizard/wizard.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import { SearchpartnerComponent } from './searchpartner/searchpartner.component';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { PartnernetworkComponent } from './partnernetwork/partnernetwork.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { DbslateComponent } from './dbslate/dbslate.component';
import { NetworkfeedComponent } from './networkfeed/networkfeed.component';
import { NetworkcontentComponent } from './networkcontent/networkcontent.component';
import { CreatenetworkComponent } from './createnetwork/createnetwork.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { AcceptInviteComponent } from './accept-invite/accept-invite.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    SearchpartnerComponent,
    PartnernetworkComponent,
    MyprofileComponent,
    DbslateComponent,
    NetworkfeedComponent,
NetworkcontentComponent,
CreatenetworkComponent,
AboutComponent,
AcceptInviteComponent
  ],
  imports: [
    StorageServiceModule,
    BrowserModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
MatTabsModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule
    
    
  ],
  exports: [
RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
