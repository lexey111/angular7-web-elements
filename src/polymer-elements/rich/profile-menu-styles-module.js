const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
	<dom-module id="profile-menu-styles-module">
	<template>
		<style>
			.profile-menu-button {
				display: flex;
				align-content: center;
				justify-content: center;
				align-items: center;
				width: var(--menu-size, 60px);
				height: var(--menu-size, 60px);
				opacity: .8;
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
				 position: relative;
			}

			.profile-menu-button svg{
				width: calc(var(--menu-size, 60px) * .6);
				height: calc(var(--menu-size, 60px) * .6);
				fill: var(--app-accent-color, #fff);
				transition: all .2s ease;
			}

			.profile-menu-button svg{
				width: calc(var(--menu-size, 60px) * .5);
				height: calc(var(--menu-size, 60px) * .5);
			}

			.profile-menu-button:hover {
				opacity: 1;
			}

			.profile-menu-button:active, 
			.profile-menu-button:focus, 
			.profile-menu-button.focus, 
			.profile-menu-button:active:focus {
				outline: none;
				outline-offset: 0;
				padding: 0;
				margin: 0;
			}
			.menu-content {
				position: absolute;
				display: flex;
				flex-flow: column nowrap;
				right: 0;
				top: var(--menu-size, 60px);
				background-color: var(--app-accent, #333);
				color: var(--app-accent-color, #fff);
				box-shadow: -4px 0 8px rgba(0, 0, 0, .2);
				opacity: 0;
				transform-origin: top right;
				transition: all .2s ease;
				z-index: 10;
				pointer-events: none;
				padding: 4px;
			}
			.menu-content.active {
				opacity: .95;
				pointer-events: all;
				z-index: 100;
				border-top: 2px solid rgba(255, 255, 255, .5);
			}
			.menu-content.active:after {
				content: '';
				position: absolute;
				top: -12px;
				right: 40px;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 0 6px 10px 6px;
				border-color: transparent transparent rgba(255, 255, 255, .5) transparent;
			}
		</style>
	</template>
</dom-module>
`;