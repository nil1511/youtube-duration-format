# youtube-duration-format [![Build Status](https://travis-ci.org/nil1511/youtube-time-format.svg?branch=master)](https://travis-ci.org/nil1511/youtube-time-format)
> Format the duration returned by google youtube data api as human understandable

## Install

```
$ npm install --save youtube-duration-format
```

## Usage

```js
var ytDurationFormat = require('youtube-duration-format');


var youtubeTime = "PT15M31S";
var duration = ytDurationFormat(youtubeTime);
console.log(duration);
// => 15:31
```
