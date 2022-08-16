const fs = require('fs')

exports.printMsg = function () {
  console.log("This is a message from the demo package");
}

console.log("This is a message from the demo package");

var resPath = "/Users/zhuzj2020/Desktop/Tenecnt/app/app_common/src/wemeet/module/account/asset/strings"
var files = fs.readdirSync(resPath);
for (var i = 0; i < files.length; i++) {
  var file = files[i];
  console.log("zhuzj00:" + file);
}

for (var file of files) {
  console.log("zhuzj02:" + file);
}