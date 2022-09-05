import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntranetComponent } from './intranet-posts/components/intranet/intranet.component';
// import { registerLocaleData } from '@angular/common';
// import * as fr from '@angular/common/locales/fr';
import { IntranetPostListComponent } from './intranet-posts/components/intranet-post-list/intranet-post-list.component';
// import { HeaderComponent } from './core/components/header/header.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { SingleIntranetPostComponent } from './intranet-posts/components/single-intranet-post/single-intranet-post.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { NewIntranetPostComponent } from './intranet-posts/components/new-intranet-post/new-intranet-post.component';
// import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';
// import { IntranetPostsModule } from './intranet-posts/intranet-posts.module';
// import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    IntranetComponent,
    IntranetPostListComponent,
    // HeaderComponent,
    // LandingPageComponent,
    // SingleIntranetPostComponent,
    // NewIntranetPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    CoreModule,
    LandingPageModule, 
    // IntranetPostsModule
    AuthModule
  ],
  // providers: [ 
  //   { provide: LOCALE_ID, useValue: 'fr-FR'},
  // //  httpInterceptorProviders
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor() {
  //   registerLocaleData(fr.default);
  // }
}
