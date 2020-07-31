// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'projects/gadget-tracer-log/src/node_modules/zone.js/dist/zone-testing';
import { getTestBed } from 'projects/gadget-tracer-log/src/node_modules/@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from 'projects/gadget-tracer-log/src/node_modules/@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
