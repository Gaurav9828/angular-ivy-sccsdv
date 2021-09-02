import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminloginComponent } from './landing-page/adminlogin/adminlogin.component';
import { WelcomePageComponent } from './landing-page/welcome-page/welcome-page.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    LandingPageComponent,
    AdminloginComponent,
    NavBarComponent,
    WelcomePageComponent
  ],
  bootstrap: [LandingPageComponent]
})
export class AppModule {}
