import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'tc-user-card',
	template: `
		<div class="tc-user-card-wrapper">
			<div class="tc-user-card-icon" [ngStyle]="{backgroundColor: this.iconBackground}">
				<span [ngStyle]="{color: this.iconColor}">{{this.getFirstLetter()}}</span>
			</div>
			<div class="tc-user-card-content external-card-content">
				Hello, {{this.userName}}

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					A cupiditate doloremque et illo maiores quae tempore voluptate.
					Consectetur dolore eveniet, harum illum laudantium nulla quam
					repellat similique, tempore ullam veritatis.
				</p>
			</div>
		</div>`,
	styles: [`
		 .tc-user-card-wrapper {
			 display: block;
			 float: left;
			 width: 310px;
			 border: 1px solid #ccc;
			 border-radius: 4px;
			 background-color: var(--card-background, #eee);
			 box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
			 padding: 16px;
			 overflow: hidden;
			 margin: 16px;
		 }

		 .tc-user-card-icon {
			 display: block;
			 float: left;
			 width: 48px;
			 height: 48px;
			 line-height: 48px;
			 border: 4px solid var(--card-icon-border, #fff);
			 border-radius: 100%;
			 margin-right: 16px;
			 margin-bottom: 8px;
			 box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
			 background-color: #888;
		 }

		 .tc-user-card-icon span {
			 display: inline-block;
			 font-size: 38px;
			 font-weight: bold;
			 width: 48px;
			 text-align: center;
			 text-shadow: 0 1px 0 rgba(0, 0, 0, .4);
			 color: #fff;
		 }

		 .tc-user-card-content {
			 display: block;
		 }

		 .tc-user-card-content p {
			 font-size: .8em;
			 padding-top: 8px;
			 font-style: italic;
		 }
	`],
	encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
	@Input() userName = 'User';
	@Input() iconColor = '#fff';
	@Input() iconBackground = '#333';
	@Input() idx = 1;

	getFirstLetter() {
		return (this.userName || '').substr(0, 1);
	}
}