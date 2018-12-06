import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from './button/@button.module';
import {InputModule} from './input/@input.module';

@NgModule({
	imports: [BrowserModule, ButtonModule, InputModule],
})
export class ElementsModule {
	ngDoBootstrap() {
		//
	}
}