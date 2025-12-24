import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StrengthPipe } from './pipe/strength-pipe';
import { PostComponent } from './posts/post/post';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    StrengthPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
