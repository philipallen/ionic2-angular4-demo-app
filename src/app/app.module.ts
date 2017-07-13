import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';

import { MyResourcesPage } from '../pages/myresources/myresources';
import { LetsTalkPage } from '../pages/letstalk/letstalk';
import { HomePage } from '../pages/home/home';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { MedicationDetailsPage } from '../pages/medicationdetails/medicationdetails';
import { UnwellPage } from '../pages/unwell/unwell';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { SymptomsSummaryPage } from '../pages/symptomssummary/symptomssummary';
import { TreatmentTimelinePage } from '../pages/treatmenttimeline/treatmenttimeline';
import { TreatmentTimelineDetailPage } from '../pages/treatmenttimelinedetail/treatmenttimelinedetail';
import { MyBookmarksPage } from '../pages/mybookmarks/mybookmarks';
import { BookmarkPage } from '../pages/bookmark/bookmark';
import { TabsPage } from '../pages/tabs/tabs';
import { MedicationConfirmationPage } from '../pages/medicationconfirmation/medicationconfirmation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '1f8bab8a'
  },
  'push': {
    'sender_id': '322195416526',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    MyResourcesPage,
    LetsTalkPage,
    HomePage,
    AppointmentsPage,
    MedicationDetailsPage,
    UnwellPage,
    SymptomsPage,
    SymptomsSummaryPage,
    TreatmentTimelinePage,
    TreatmentTimelineDetailPage,
    MyBookmarksPage,
    BookmarkPage,
    TabsPage,
    MedicationConfirmationPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true, mode: 'ios' }),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyResourcesPage,
    LetsTalkPage,
    HomePage,
    AppointmentsPage,
    MedicationDetailsPage,
    UnwellPage,
    SymptomsPage,
    SymptomsSummaryPage,
    TreatmentTimelinePage,
    TreatmentTimelineDetailPage,
    MyBookmarksPage,
    BookmarkPage,
    TabsPage,
    MedicationConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
