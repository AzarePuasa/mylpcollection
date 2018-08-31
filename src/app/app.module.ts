import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LPCollectionComponent } from './components/lpcollection.component';
import { NewlpformComponent } from './components/newlpform.component';

@NgModule({
  declarations: [
    AppComponent,
    LPCollectionComponent,
    NewlpformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
