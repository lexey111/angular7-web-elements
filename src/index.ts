import 'zone.js/dist/zone';

import '@webcomponents/custom-elements/src/native-shim';

import './assets/app.less';
import './index.html';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonModule } from './components/@button.module';

platformBrowserDynamic().bootstrapModule(ButtonModule);