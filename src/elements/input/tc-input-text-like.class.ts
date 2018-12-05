import {ɵangular_packages_common_common_g} from '@angular/common';
import {AfterContentChecked, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'tc-input-text-like',
	template: 'this is not the real component',
	styleUrls: [],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TCInputTextLikeComponent),
			multi: true
		},
	],
	encapsulation: ViewEncapsulation.None
})
export class TCInputTextLikeComponent implements ControlValueAccessor, AfterContentChecked {
	@HostBinding('class.focused') isFocused: boolean = false;
	@HostBinding('class.has-label') hasLabel: boolean = false;

	@ViewChild('inputContainer') inputContainer: ElementRef;
	@ViewChild('inputLabel') inputLabel: ElementRef;
	@ViewChild('inputBelow') inputBelow: ElementRef;
	@ViewChild('inputInline') inputInline: ElementRef;
	@ViewChild('inputAddonAppend') inputAddonAppend: ElementRef;
	@Input('placeholder') placeholder: string = '';
	@Input('maxlength') maxlength = null;
	@Output('change') change = new EventEmitter();
	private _isDisabled = false;

	constructor(private elementRef: ElementRef) {
		//
	}

	private _hasAddonAppend: boolean = false;

	get hasAddonAppend() {
		return this._hasAddonAppend;
	}

	@Input('hasAddonAppend')
	set hasAddonAppend(value: boolean) {
		this._hasAddonAppend = !!value;
		this.setInputAppearance();
	}

	private _label = void 0;

	get label() {
		return this._label;
	}

	@Input('label')
	set label(value: string) {
		this._label = value;
		this.hasLabel = !!value;
		this.setInputAppearance();
	}

	get disabled() {
		return this._isDisabled;
	}

	@Input('disabled')
	set disabled(value: boolean) {
		this._isDisabled = !!value;
		this.setInputAppearance();
	}

	@Input('value') _value: any = null;

	get value(): number {
		return this._value;
	}

	set value(value: number) {
		this._value = value;
		this.propagateChange(value);
	}

	private static isViewChildPresent(viewChild: ElementRef): boolean {
		if (!viewChild || !viewChild.nativeElement) {
			return false;
		}
		return !!(viewChild.nativeElement.children.length > 0 || viewChild.nativeElement.innerHTML.trim());
	}

	setDisabledState(isDisabled: boolean): void {
		this._isDisabled = isDisabled;
	}

	writeValue(value: any): void {
		if (value) {
			this._value = value;
		}
	}

	propagateChange = (_: any) => {
		//
	}

	propagateTouch = (_: any) => {
		//
	}

	registerOnChange(fn: (_: any) => void): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.propagateTouch = fn;
	}

	onChange(event: any) {
		this.propagateChange(this.value);
		this.change.emit(this.value);
	}

	onTouch(event: any) {
		this.propagateTouch(event);
	}

	onFocus(event: any) {
		this.isFocused = true;
		if (this.elementRef.nativeElement.className.indexOf('focused') === -1) {
			this.elementRef.nativeElement.className += ' focused';
		}
	}

	onBlur(event: any) {
		this.isFocused = false;
		if (this.elementRef.nativeElement.className.indexOf('focused') !== -1) {
			this.elementRef.nativeElement.className = this.elementRef.nativeElement.className.replace(/ focused/, '');
		}
	}

	ngAfterContentChecked() {
		this.setInputAppearance();
	}

	private setInputAppearance() {
		this._hasAddonAppend = TCInputTextLikeComponent.isViewChildPresent(this.inputAddonAppend);
	}
}