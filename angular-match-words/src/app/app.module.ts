import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ReplyButtonComponent } from './components/reply-button/reply-button.component';
import { MatchComponent } from './pages/match/match.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ReplyButtonComponent,
    MatchComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
