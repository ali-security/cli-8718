var fs = require('graceful-fs')
var mkdirp = require('mkdirp')
var npm = require('../npm.js')

module.exports = function getCacheStat (cb) {
  mkdirp(npm.cache, function (er) {
    if (er) return cb(er)
    fs.stat(npm.cache, cb)
  })
}
