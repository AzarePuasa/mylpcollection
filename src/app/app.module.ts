import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialsModule } from './materials.module';

import { AppComponent } from './app.component';
import { LPCollectionComponent } from './components/lpcollection.component';
import { NewlpformComponent } from './components/newlpform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LPCollectionComponent,
    NewlpformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
