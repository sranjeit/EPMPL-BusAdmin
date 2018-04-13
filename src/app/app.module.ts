import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//page
import { StudentReportPage } from '../pages/student_report/student_report';
import { ReportPage } from '../pages/report/report';
import { StudentsPage } from '../pages/students/students';
import { ProfilePage } from '../pages/profile/profile';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { NewStudentPage } from '../pages/newstudent/newstudent';
import { EditProfilePage } from '../pages/editProfile/editProfile';
import { EditStudentPage } from '../pages/editstudent/editstudent';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StudentService } from '../service/student.service';
import { AttendanceService } from '../service/attendance.service';
import { UserService } from '../service/user.service';

import { IonicStorageModule } from '@ionic/storage';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SMS } from '@ionic-native/sms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EmailComposer } from '@ionic-native/email-composer';
import { DatePicker } from '@ionic-native/date-picker';
import {Md5} from 'ts-md5/dist/md5';


export const firebaseConfig = {
    apiKey: "AIzaSyAwIxXyerPRuX7swquFdTIc9QHbbEYu7HU",
    authDomain: "epmpl-schoolbus.firebaseapp.com",
    databaseURL: "https://epmpl-schoolbus.firebaseio.com",
    projectId: "epmpl-schoolbus",
    storageBucket: "epmpl-schoolbus.appspot.com",
    messagingSenderId: "583504097587"
};


@NgModule({
  declarations: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    CalendarPage,
    NewStudentPage,
	StudentReportPage,
    EditStudentPage,
    LoginPage,
    EditProfilePage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrcodePage,
    ProfilePage,
    StudentsPage,
    ReportPage,
    CalendarPage,
    LoginPage,
    SignupPage,
    EditStudentPage,
    StudentReportPage,
    EditProfilePage,
    NewStudentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    StudentService,
    AttendanceService,
    BarcodeScanner,
    Md5,
    UserService,
    SMS,
    EmailComposer,
    DatePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
