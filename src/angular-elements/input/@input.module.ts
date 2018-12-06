import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TCInputTextLikeComponent} from './tc-input-text-like.class';
import {TCInputTextComponent} from './tc-input-text.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [TCInputTextComponent, TCInputTextLikeComponent],
	entryComponents: [TCInputTextComponent]
})
export class InputModule {
	constructor(private injector: Injector) {
		const customButton = createCustomElement(TCInputTextComponent, {injector});
		customElements.define('tc-input-text', customButton);
	}

	ngDoBootstrap() {
		//
	}
}