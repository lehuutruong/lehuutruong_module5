import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {MessageService} from "../service/message.service";
import {AsyncPipe} from "@angular/common";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireMessagingModule} from "@angular/fire/messaging";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessageService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
