import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { AppComponent }           from './app.component';
import { FooterComponent }        from './components/footer/footer.component';
import { AppRoutingModule }       from './app-routing.module';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { LoginComponent }         from './login/login.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { AuthService }            from './auth/auth.service';
import { UserService }            from './user.service';
import { HttpClientModule }       from '@angular/common/http';
import { ProfileComponent }       from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GameDashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProfileComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
