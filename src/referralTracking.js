(function() {
    console.log("checkmate");

    createCookie('referrer','philip',7);
    
    var x = readCookie('referrer')
    if (x) {
        console.log("cookie set already");
    }

})();


function createCookie(name,value,days) {
    console.log("in createCookie");
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    console.log(name + "=" + value + expires + "; path=/");
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
