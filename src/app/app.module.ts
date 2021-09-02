import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HelloComponent, LandingPageComponent],
  bootstrap: [LandingPageComponent]
})
export class AppModule {}
