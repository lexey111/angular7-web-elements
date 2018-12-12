import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from './button/@button.module';
import {InputModule} from './input/@input.module';
import {UserCardModule} from './user-card/@user-card.module';

@NgModule({
	imports: [BrowserModule, ButtonModule, InputModule, UserCardModule],
})
export class ElementsModule {
	ngDoBootstrap() {
		//
	}
}