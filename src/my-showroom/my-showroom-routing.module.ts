import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyShowroomComponent } from './my-showroom.component';

const appRoutes: Routes = [
  { path: '',   component: MyShowroomComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MyShowroomRoutingModule {}
