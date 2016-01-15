var makerjs = require('makerjs');
var BandClamp = require('./index');
var b = new BandClamp(12.7, 3, 12, 5, 0, 1, 1);

console.log(makerjs.exporter.toSVG(b));
