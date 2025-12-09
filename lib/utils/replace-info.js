var URL = require("url")

// replaces auth info in an array of arguments or in a string
function replaceInfo (arg) {
  var isArray = Array.isArray(arg)
  var isString = typeof arg === "string"

  if (!isArray && !isString) return arg

  var args = isString ? arg.split(" ") : arg
  var info = args.map(function (arg) {
    try {
      var url = URL.parse(arg)
      // Check if URL has auth info (password specifically)
      if (url.auth && url.auth.indexOf(":") !== -1) {
        var authParts = url.auth.split(":")
        var redactedAuth = authParts[0] + ":***"
        return arg.replace(url.auth, redactedAuth)
      }
      return arg
    } catch (e) {
      return arg
    }
  })

  return isString ? info.join(" ") : info
}

module.exports = replaceInfo
