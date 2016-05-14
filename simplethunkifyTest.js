/**
 * Created by jason on 2016/5/14.
 */
var thunkify = require('./simplethunkify');
var assert = require('assert');
var fs = require('fs');

describe('thunkify(fn)', function() {
    it('should work when sync', function (done) {
        function read(file, fn) {
            fn(null, 'file: ' + file);
        }
        read = thunkify(read);
        read('foo.txt')(function (err, res) {
            assert(!err);
            assert('file: foo.txt' == res);
            done();
        });
    })
});
