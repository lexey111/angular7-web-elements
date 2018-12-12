import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {UserCardComponent} from './user-card.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [UserCardComponent],
	entryComponents: [UserCardComponent]
})
export class UserCardModule {
	constructor(private injector: Injector) {
		const customCard = createCustomElement(UserCardComponent, {injector});
		customElements.define('tc-user-card', customCard);
	}

	ngDoBootstrap() {
		//
	}
}