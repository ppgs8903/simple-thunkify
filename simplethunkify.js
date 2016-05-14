/**
 * Created by jason on 2016/5/14.
 */

/**
 * Wrap a regular callback `fn` as a thunk.
 *
 * @param {Function} fn
 * @return {Function}
 * @api public
 */
function simplethunkify(fn) {
    return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        return function() {
            fn.apply(this, args.concat(arguments[0]));
        }
    }
}

module.exports = simplethunkify;