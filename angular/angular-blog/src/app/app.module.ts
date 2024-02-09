import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [{ provide: APP_BASE_HREF, useValue: '/studies/angular-diretivas/angular-blog/dist/angular-blog/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
