import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModuleModule } from './test-module/test-module.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TestModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
