const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
	<dom-module id="rich-ui-shared-styles-module">
	<template>
		<style>
			.app-switcher {
				display: flex;
				align-content: center;
				justify-content: center;
				align-items: center;
				width: var(--menu-size, 40px);
				height: var(--menu-size, 40px);
				opacity: .9;
				transition: opacity .2s ease;
				cursor: pointer;
			}

			.app-switcher svg {
				width: calc(var(--menu-size, 20px) * .6);
				height: calc(var(--menu-size, 20px) * .6);
				fill: var(--app-accent-color, #fff);
			}

			.app-switcher:hover{
				opacity: 1;
			}
			
			.app-switcher:focus, .app-switcher:active {
				opacity: 1;
				outline: none;
			}
			

			.logo {
				padding: 0 0 0 8px;
				margin: 0;
				display: flex;
				align-content: center;
				align-self: center;
				font-size: 22px;
				color: var(--app-accent-color, red);
				text-transform: uppercase;
			}

			.switcher-content {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				width: var(--app-switcher-size, 200px);
				color: var(--app-accent-color, red);
				background-color: var(--app-accent, red);
				box-shadow: 0 4px 8px rgba(0, 0, 0, .5);
				opacity: 0;
				pointer-events: none;
				transform: translateX( -(var(--app-switcher-size, 200px)));
				transition: all .2s ease;
				z-index: 10;
			}
			
			.switcher-content.active {
				opacity: .9;
				pointer-events: all;
				transform: translateX(0);
			}
			
			.switcher-close {
				position: absolute;
				right: 8px;
				top: 4px;
				font-size: 30px;
				cursor: pointer;
				opacity: .8;
				transition: all .2s ease;
			}

			.switcher-close:hover {
				opacity: 1;
			}
		</style>
	</template>
</dom-module>
`;