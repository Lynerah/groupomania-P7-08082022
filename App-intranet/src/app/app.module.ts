import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet/intranet.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { IntranetPostListComponent } from './intranet-post-list/intranet-post-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleIntranetPostComponent } from './single-intranet-post/single-intranet-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewIntranetPostComponent } from './new-intranet-post/new-intranet-post.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    IntranetComponent,
    IntranetPostListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleIntranetPostComponent,
    NewIntranetPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
