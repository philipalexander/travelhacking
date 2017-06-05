function checkUrl() {
    var url = window.location.href;
    // If referrer equals the referrer id given to the affiliate
    if (_get("referrer", url) == 'philip') {
        return true;
    } else {
        return false;
    }
}

// @param parameter {String} Key of the get parameter to retrieve
// @param URL {String} The URL to search for the get parameter
function _get(parameter , URL) {
   var reg = new RegExp( '[?&]' + parameter + '=([^&#]*)', 'i' );
   var string = reg.exec(URL);
   return string ? string[1] : undefined;
};

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function referrerSignup() {
    var x = readCookie('referrer');
    var email = "myemail@test.com";
    console.log("referrer", x);
    console.log("refferred email", email);
    console.log("api call", "http://localhost:8000/referral/?cust=" + x + "&email=" + email);
    if (x) {
        function sendReferrer() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "http://localhost:8000/referral/?cust=" + x + "&email=" + email, false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            var response = JSON.parse(xhttp.responseText);
        }
        sendReferrer();
    }
}

// On load, run some shit
// test data: ?referrer=philip
(function() {
    if (checkUrl()) {
        createCookie('referrer','philip',7);
        console.log('cookie set...hopefully')
    }
    referrerSignup();
})();
