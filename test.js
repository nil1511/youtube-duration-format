'use strict';

var test = require('ava');
var ytDurationFormat = require('./');

test(function (t) {
	t.assert(ytDurationFormat('PT2M38S') === '02:38','02:38');
  t.assert(ytDurationFormat('PT15M31S') === '15:31','15:31');
  t.assert(ytDurationFormat('PT3H56M1S') === '3:56:01','3:56:01');
  t.assert(ytDurationFormat('PT55S') === '00:55','00:55');
  t.assert(ytDurationFormat('P2W3DT80H21M11S') === '488:21:11','488:21:11');
});
