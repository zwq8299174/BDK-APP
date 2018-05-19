import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RemindPage } from './remind/remind';

@NgModule({
  declarations: [
    RemindPage,
  ],
  entryComponents: [
	  RemindPage,
  ],
  imports: [
	  IonicModule
  ]
})
export class RemindModule {
}
