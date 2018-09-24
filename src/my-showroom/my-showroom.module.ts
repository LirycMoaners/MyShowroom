import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatToolbarModule, MatChipsModule, MatButtonModule, MatIconModule } from '@angular/material';

import { MyShowroomComponent } from './my-showroom.component';
import { ProjectService } from './shared/project/project.service';
import { HttpModule } from '@angular/http';
import { MyShowroomRoutingModule } from './my-showroom-routing.module';
import { ClickOutsideDirective } from './shared/click-outside.directive';

@NgModule({
  declarations: [
    MyShowroomComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MyShowroomRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [MyShowroomComponent]
})
export class MyShowroomModule { }
