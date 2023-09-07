import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ResourceTimeComponent } from './resource-time/resource-time.component';
import { ResourceDataComponent } from './resource-data/resource-data.component';
import { ResourceTypeComponent } from './resource-type/resource-type.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ResourceTimeComponent,
    ResourceDataComponent,
    ResourceTypeComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
