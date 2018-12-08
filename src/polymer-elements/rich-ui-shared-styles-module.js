const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
	<dom-module id="rich-ui-shared-styles-module">
	<template>
		<style>
			::slotted(div) {
				display: flex;
				align-items: center;
			}
		</style>
	</template>
</dom-module>
`;