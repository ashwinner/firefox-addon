$('form').submit(function() {
      alert("Logging in with username:"+ uname + " and password:"+ pass + " at " + window.location.href);
});

var uname;
var pass="";

$('input:text').blur(function() {
        uname=$(this).val();   
});

$('input:password').keypress(function(event) {
       
        if(event.which>31) {
            pass=pass.concat(String.fromCharCode(event.which));
        }
        else if(event.which === 8)
            pass=pass.substring(0, pass.length-1);

});

