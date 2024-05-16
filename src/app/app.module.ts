import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesHwComponent } from './directives-hw/directives-hw.component';
import { DataBindingHwComponent } from './Assignments/data-binding-hw/data-binding-hw.component';
import { SuccessAlertComponent } from './Assignments/success-alert/success-alert.component';
import { WarningAlertComponent } from './Assignments/warning-alert/warning-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivesHwComponent,
    DataBindingHwComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
