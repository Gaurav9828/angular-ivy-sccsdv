import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './landing-page/login/login.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [LandingPageComponent, LoginComponent],
  bootstrap: [LandingPageComponent]
})
export class AppModule {}
