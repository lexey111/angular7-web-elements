const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
	<dom-module id="side-menu-styles-module">
	<template>
		<style>
			.side-menu-container {
				position: fixed;
				top: var(--menu-size, 60px);
				left: 0;
				bottom: 0;
				width: var(--menu-size, 60px);
				background-color: var(--app-accent, #333);
				color: var(--app-accent-color, #fff);
				z-index: 2;
				padding: 0;
				margin: 0;
				transition: all .2s ease;
				opacity: 1;
				overflow: hidden;
			}
			.side-menu-container.active {
				width: 250px;
				box-shadow: 4px 0 8px rgba(0, 0, 0, .4);
				opacity: .95;
			}
			.side-menu-button {
				display: flex;
				padding: 0;
				margin: 0;
				align-content: center;
				justify-content: center;
				align-items: center;
				width: var(--menu-size, 60px);
				height: calc(var(--menu-size, 30px) / 2);
				color: var(--app-accent-color, #fff);
				background-color: rgba(0, 0, 0, .1);
				opacity: .9;
				transition: all .2s ease;
				cursor: pointer;
				border: none;
				outline: none;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				 user-select: none;
				 position: relative;
			}
			.side-menu-container.active .side-menu-button {
				width: 100%;
				z-index: 10;
				align-items: flex-end;
				align-content: flex-end;
				justify-content: flex-end;
			}
			.side-menu-container.active .side-menu-button:after {
				content: 'CLOSE MENU';
				font-size: 12px;
				padding-right: 8px;
				height: calc(var(--menu-size, 30px) / 2);
				line-height: calc(var(--menu-size, 30px) / 2);
				opacity: .7;
			}
			.side-menu-container.active .side-menu-button svg {
				transform: rotate(180deg);
			}

			.side-menu-button svg{
				width: calc(var(--menu-size, 60px) * .4);
				height: calc(var(--menu-size, 30px) / 2);
				fill: var(--app-accent-color, #fff);
				transition: all .8s ease;
			}

			.side-menu-button:hover {
				opacity: 1;
				background-color: rgba(255, 255, 255, .1);
			}

			.side-menu-button:active, 
			.side-menu-button:focus, 
			.side-menu-button.focus, 
			.side-menu-button:active:focus {
				outline: none;
				outline-offset: 0;
				padding: 0;
				margin: 0;
			}
			.side-menu-content {
				position: fixed;
				display: flex;
				flex-flow: column nowrap;
				left: 0;
				top: calc(var(--menu-size, 60px) * 1.5);
				bottom: 0;
				transition: all .2s ease;
				width: var(--menu-size, 60px);
				z-index: 10;
			}
			.side-menu-content.active {
				width: 250px;
			}
		</style>
	</template>
</dom-module>
`;