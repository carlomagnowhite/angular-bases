import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormAddComponent } from './components/form-add/form-add.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
