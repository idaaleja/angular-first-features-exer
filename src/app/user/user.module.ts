import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
