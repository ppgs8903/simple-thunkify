# simple-thunkify
[![Build Status](https://api.travis-ci.org/ppgs8903/simplethunkify.png?branch=master)](https://api.travis-ci.org/ppgs8903/simplethunkify)
[ ![Codeship Status for ppgs8903/simplethunkify](https://codeship.com/projects/67bdaae0-fc2c-0133-8cb8-2a8a40d7765d/status?branch=master)](https://codeship.com/projects/152010)

[![NPM](https://nodei.co/npm/simplethunkify.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/simplethunkify/)

node-thunkify simple implementation.
support: study.

## Installation
npm install --save-dev simplethunkify

## Example
###brfore
```javascript
    var fs= require('fs');
    fs.readFile('package.json', 'utf8', function(err,data){
        if (err) {
            throw err;
        } else {
            console.log(data);
        }
    })
```
###after
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
