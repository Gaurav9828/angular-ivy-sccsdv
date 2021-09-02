import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminloginComponent } from './landing-page/adminlogin/adminlogin.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [LandingPageComponent, AdminloginComponent],
  bootstrap: [LandingPageComponent]
})
export class AppModule {}
