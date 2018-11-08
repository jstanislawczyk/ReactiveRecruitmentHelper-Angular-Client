import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { CookieService } from 'ngx-cookie-service';
import { NavigationDesktopComponent } from './navigation/navigation-desktop/navigation-desktop.component';
import { NavigationMobileComponent } from './navigation/navigation-mobile/navigation-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ApplicationComponent,
    CookieBannerComponent,
    NavigationDesktopComponent,
    NavigationMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
