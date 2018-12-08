const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
	<dom-module id="rich-ui-shared-styles-module">
	<template>
		<style>
			.app-switcher, .profile-menu-button {
				display: flex;
				align-content: center;
				justify-content: center;
				align-items: center;
				width: var(--menu-size, 60px);
				height: var(--menu-size, 60px);
				opacity: .9;
				transition: opacity .2s ease;
				cursor: pointer;
				border: none;
				background: none;
				outline: none;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				 user-select: none;
			}

			.app-switcher svg, .profile-menu-button svg{
				width: calc(var(--menu-size, 60px) * .6);
				height: calc(var(--menu-size, 60px) * .6);
				fill: var(--app-accent-color, #fff);
				transition: all .2s ease;
			}

			.profile-menu-button svg{
				width: calc(var(--menu-size, 60px) * .5);
				height: calc(var(--menu-size, 60px) * .5);
			}

			.app-switcher:hover, .profile-menu-button:hover {
				opacity: 1;
			}

			.app-switcher:active, 
			.app-switcher:focus, 
			.app-switcher.focus, 
			.app-switcher:active:focus,
			.profile-menu-button:active, 
			.profile-menu-button:focus, 
			.profile-menu-button.focus, 
			.profile-menu-button:active:focus {
				outline: none;
				outline-offset: 0;
				padding: 0;
				margin: 0;
			}

			.app-switcher:hover svg, 
			.app-switcher:active svg, 
			.app-switcher:hover:active svg, 
			.app-switcher:focus svg, 
			.app-switcher.focus svg, 
			.app-switcher:active:focus svg{
				width: calc(var(--menu-size, 60px) * .65);
				height: calc(var(--menu-size, 60px) * .65);
			}
			
			.logo {
				padding: 0 0 0 8px;
				margin: 0;
				display: flex;
				align-content: center;
				align-self: center;
				font-size: 22px;
				color: var(--app-accent-color, #fff);
				text-transform: uppercase;
			}

			.switcher-content {
				display: flex;
				flex-flow: column nowrap;
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				width: var(--app-switcher-size, 300px);
				color: var(--app-accent-color, #fff);
				background-color: var(--app-accent, #333);
				box-shadow: 4px 0 8px rgba(0, 0, 0, .5);
				opacity: 0;
				pointer-events: none;
				transform: translateX( -(var(--app-switcher-size, 300px)));
				transition: all .2s ease;
				z-index: 10;
				padding: var(--menu-size, 60px) 8px 0 8px;
			}
			
			.switcher-content.active {
				opacity: .95;
				pointer-events: all;
				transform: translateX(0);
			}
			
			.switcher-title {
				opacity: .8;
				font-size: 16px;
				font-weight: bold;
				position: absolute;
				display: flex;
				top: 0;
				height: var(--menu-size, 60px);
				right: 0;
				left: 0;
				align-items: center;
				align-content: center;
				padding: 0 8px;
				background-color: rgba(0, 0, 0, .2);
			}
			
			.switcher-close {
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				height: calc(var(--menu-size, 60px) + 4px);
				width: var(--menu-size, 60px);
				right: 0;
				top: -4px;
				font-size: 36px;
				line-height: 1em;
				cursor: pointer;
				opacity: .8;
				transition: all .2s ease;
				z-index: 11;
				background-color: rgba(0, 0, 0, .2);
			}

			.switcher-close:hover {
				opacity: 1;
				background-color: rgba(255, 255, 255, .2);
			}
			
			.app-switcher-item {
				display: flex;
				height: var(--menu-size, 60px);
				width: 100%;
				padding: 0 20px;
				align-content: center;
				align-items: center;
				cursor: pointer;
				transition: all .2s ease;
			}

			.app-switcher-item:hover {
				background-color: rgba(255,255,255,.3);
			}
			
			::slotted(div) {
				display: flex;
				align-items: center;
			}

			.middle-content, slot[name=middle-content], ::slotted(.middle-content) {
				display: flex;
				flex-flow: row nowrap;
				flex-grow: 2;
				margin-left: 16px;
				align-items: center;
				justify-content: center;
				color: var(--app-accent-color, #fff);
			}

			.right-content, slot[name=right-content], ::slotted(.right-content) {
				display: flex;
				flex-flow: row nowrap;
				flex-grow: 0;
				flex-shrink: 0;
				align-items: center;
				justify-content: flex-end;
				padding-right: 16px;
				margin-left: 16px;
				color: var(--app-accent-color, #fff);
			}
		</style>
	</template>
</dom-module>
`;