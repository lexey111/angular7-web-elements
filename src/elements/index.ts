import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import '@webcomponents/custom-elements/src/native-shim';
import 'zone.js/dist/zone';
import {ElementsModule} from './@elements.module';

platformBrowserDynamic().bootstrapModule(ElementsModule);