import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { GustavoComponent } from './gustavo/gustavo.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { TimerComponent } from './timer/timer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'gustavo', component: GustavoComponent },
      { path: 'tabuada', component: TabuadaComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [
    HomeComponent,
    RootComponent,
    NavbarComponent,
    GustavoComponent,
    TabuadaComponent,
    TimerComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
