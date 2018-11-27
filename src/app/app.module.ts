import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

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
import { ApplicationSuccessComponent } from './application/application-success/application-success.component';
import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersCreateSuccessComponent } from './user-create/user-create-success/user-create-success.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ApplicationComponent,
    CookieBannerComponent,
    NavigationDesktopComponent,
    NavigationMobileComponent,
    ApplicationSuccessComponent,
    LoginComponent,
    CandidatesComponent,
    AccountComponent,
    LogoutComponent,
    PageNotFoundComponent,
    UserCreateComponent,
    UsersCreateSuccessComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
