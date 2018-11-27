import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ActionPage } from '../pages/action/action';
import { BadgePage } from '../pages/badge/badge';
import { DetailContactPage } from '../pages/detail-contact/detail-contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrangProvider } from '../providers/orang/orang';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ActionPage,
    BadgePage,
    HomePage,
    DetailContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    IonicModule.forRoot(MyApp,{
      'iconMode': 'ios',
      'tabsLayout': 'icon',
      platforms:{
        ios: {'tabsPlacement': 'top'},
        android:{'tabsPlacement': 'bottom'}
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ActionPage,
    BadgePage,
    HomePage,
    DetailContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrangProvider
  ]
})
export class AppModule {}
