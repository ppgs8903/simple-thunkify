# simple-thunkify
[![Build Status](https://api.travis-ci.org/ppgs8903/simplethunkify.png?branch=master)](https://api.travis-ci.org/ppgs8903/simplethunkify)
[ ![Codeship Status for ppgs8903/simplethunkify](https://codeship.com/projects/67bdaae0-fc2c-0133-8cb8-2a8a40d7765d/status?branch=master)](https://codeship.com/projects/152010)

node-thunkify simple implementation.
support: study.

## Installation
wait release

## Example
```javascript
var simplethunkify = require('simplethunkify');
var fs = require('fs');
var read = simplethunkify(fs.readFile);
read('package.json', 'utf8')(function(err, str){
});
```

## Contributors
Author: Jason Tao

## License
Apache-2.0
