import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './leftsidebar/left.sidebar.component';
import { RightSideBarComponent } from './rightsidebar/right.sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    RightSideBarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
