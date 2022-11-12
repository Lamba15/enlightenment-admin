import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksComponent } from './books/books.component';
import {RouterOutlet} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    BooksComponent,
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		RouterOutlet,
		MatTableModule,
    HttpClientModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
