import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { PlenguagesComponent } from './plenguages/plenguages.component';
import { LenguagesComponent } from './lenguages/lenguages.component';
import { SoftwareComponent } from './software/software.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FooterComponent,
    EducationComponent,
    PlenguagesComponent,
    LenguagesComponent,
    SoftwareComponent,
    FrameworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
