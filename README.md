# simple-thunkify
[![Build Status](https://api.travis-ci.org/ppgs8903/simple-thunkify.png?branch=master)](https://api.travis-ci.org/ppgs8903/simple-thunkify)
[ ![Codeship Status for ppgs8903/simple-thunkify](https://codeship.com/projects/a3771a10-fc1c-0133-76b1-1a008a1cc055/status?branch=master)](https://codeship.com/projects/151998)

node-thunkify simple implementation.

## Installation
等待release

## Example
var simplethunkify = require('simplethunkify');
var fs = require('fs');
var read = simplethunkify(fs.readFile);
read('package.json', 'utf8')(function(err, str){
});

## License
Apache-2.0
