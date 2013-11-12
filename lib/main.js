var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
 
 pageMod.PageMod({
       include: "*",
         contentScriptFile: [self.data.url("jquery-2.0.3.min.js"), self.data.url("my-content-script.js")]
 });

var request = require("sdk/request").Request;

var testReq = request ({
    url: "http://localhost/test.php",
    onComplete: function(response) {
        console.log(response.text);
    }
}).get();


