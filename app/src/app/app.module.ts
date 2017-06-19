import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Events } from 'ionic-angular';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { Push } from '@ionic-native/push';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AuthPage } from '../pages/auth/auth';
import { ContactPage } from '../pages/contact/contact';
import { FeedPage } from '../pages/feed/feed';
import { CreatePostPage } from '../pages/create-post/create-post';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LandingPage } from '../pages/landing/landing';
import { SignupPage } from '../pages/signup/signup';
import { ForgottenPasswordPage } from '../pages/forgotten-password/forgotten-password';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FacebookConnectComponent } from '../components/facebook-connect/facebook-connect';
import { FacebookService } from '../providers/facebook-service/facebook-service';
import { InterceptedHttp } from '../providers/intercepted-http/intercepted-http';
import { ApiService } from '../providers/api-service/api-service';
import { NotificationService } from '../providers/notification-service/notification-service';
import { UserService } from '../providers/user-service/user-service';
import { NavigationService } from '../providers/navigation-service/navigation-service';
import { AuthService } from '../providers/auth-service/auth-service';
import { PostCardComponent } from '../components/post-card/post-card';
import { PostService } from '../providers/post-service/post-service';
import { FeedService } from '../providers/feed-service/feed-service';
import { ScrollTopProvider } from '../providers/scroll-top/scroll-top';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    CreatePostPage,
    TabsPage,
    LandingPage,
    FacebookConnectComponent,
    AuthPage,
    SignupPage,
    ForgottenPasswordPage,
    PrivacyPolicyPage,
    TermsConditionsPage,
    PostCardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    CreatePostPage,
    TabsPage,
    LandingPage,
    AuthPage,
    SignupPage,
    ForgottenPasswordPage,
    PrivacyPolicyPage,
    TermsConditionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Push,
    Facebook,
    FacebookService,
    {
      provide: InterceptedHttp,
      useFactory: (backend: XHRBackend, opts: RequestOptions, events: Events) => {
        return new InterceptedHttp(backend, opts, events);
      },
      deps: [XHRBackend, RequestOptions, Events]
    },
    ApiService,
    NotificationService,
    UserService,
    NavigationService,
    AuthService,
    PostService,
    FeedService,
    ScrollTopProvider
  ]
})
export class AppModule { }
