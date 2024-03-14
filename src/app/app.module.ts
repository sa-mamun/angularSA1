import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    NavBarComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
