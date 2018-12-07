import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TCInputTextLikeComponent} from './tc-input-text-like.class';

@Component({
	selector: 'tc-input-text',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TCInputTextComponent),
			multi: true
		},
	],
	host: {
		'[class.tc-control]': 'true'
	},
	template: `
		<div class="tc-control-label" #inputLabel [hidden]="!hasLabel">
			{{label}}
		</div>

		<div class="tc-control-input-group" [ngClass]="{'with-addon-append': hasAddonAppend}">
			<div class="tc-control-input-area">
				<div class="tc-control-input-container">
					<input type="text"
					       class="tc-control-input"
					       [(ngModel)]="value"
					       [placeholder]="placeholder"
					       [maxlength]="maxlength"
					       [disabled]="disabled"
					       (change)="onChange($event)"
					       (focus)="onFocus($event)"
					       (blur)="onBlur($event)"
					       (keypress)="onKey($event)"
					       (input)="onChange($event)">
				</div>

				<div class="tc-control-input-addon-append" #inputAddonAppend [hidden]="!hasAddonAppend">
					<ng-content select=".addon-control.append"></ng-content>
				</div>

				<div class="tc-control-input-inline" #inputInline>
					<ng-content select=".inline-control"></ng-content>
				</div>
			</div>

			<div class="tc-control-input-below" #inputBelow>
				<ng-content select=".below-control"></ng-content>
			</div>
		</div>
	`
})
export class TCInputTextComponent extends TCInputTextLikeComponent {
}