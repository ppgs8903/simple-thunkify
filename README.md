# simple-thunkify
[![Build Status](https://api.travis-ci.org/ppgs8903/simple-thunkify.png?branch=master)](https://api.travis-ci.org/ppgs8903/simple-thunkify)
node-thunkify simple implementation.

## Installation
等待release

## Example
var thunkify = require('thunkify');

var fs = require('fs');
 
var read = thunkify(fs.readFile);
 
read('package.json', 'utf8')(function(err, str){
  
});

## License
Apache-2.0
