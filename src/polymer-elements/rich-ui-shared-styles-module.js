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
				display: flex;
				flex-flow: column nowrap;
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				width: var(--app-switcher-size, 200px);
				color: var(--app-accent-color, red);
				background-color: var(--app-accent, red);
				box-shadow: 4px 0 8px rgba(0, 0, 0, .5);
				opacity: 0;
				pointer-events: none;
				transform: translateX( -(var(--app-switcher-size, 200px)));
				transition: all .2s ease;
				z-index: 10;
				padding: var(--menu-size, 20px) 8px 0 8px;
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
				height: var(--menu-size, 60px);
				right: 8px;
				top: 0;
				font-size: 30px;
				cursor: pointer;
				opacity: .8;
				transition: all .2s ease;
				z-index: 11;
			}

			.switcher-close:hover {
				opacity: 1;
			}
			
			.app-switcher-item {
				display: flex;
				height: var(--menu-size, 20px);
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
		</style>
	</template>
</dom-module>
`;