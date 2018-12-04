import { Input, Component, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'custom-button',
	template: `<button (click)="handleClick()">{{label}}</button>`,
	styles: [`
	button {
		border: 1px solid green;
		padding: 8px 16px;
		background: #bada55;
		font-size: 14px;
	}
	button:hover {
		cursor: pointer;
		background: #caea65;
	}
  `],
	encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
	@Input() label = 'default label';
	@Output() action = new EventEmitter<number>();

	private clicksCt = 0;

	handleClick() {
		this.clicksCt++;
		this.action.emit(this.clicksCt);
	}
}