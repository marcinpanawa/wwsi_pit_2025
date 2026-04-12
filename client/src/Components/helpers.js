

export const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

export const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export const checkSessionCookie = (cookie) => {
    if (cookie && !getCookie(cookie) && document.getElementById("cookiePolicyProject")) {
        document.getElementById("cookiePolicyProject").style.display = 'inherit';
    }
}

export const closeCookieWindow = () => {
    setCookie('cookiePolicyProject', 'true', 30);
    document.getElementById("cookiePolicyProject").style.display = 'none';
}

export const setHtmlClass = () => {
    const colorCookie = getCookie("colortheme") || "color-normal";
    const sizeCookie = getCookie("sizetheme") || "font-normal";
    var appClass = sizeCookie + " " + colorCookie;
    document.querySelector("html").className = appClass;
    document.getElementById('main').className = appClass;

}

export const setSizeCookie = (size) => {
    setCookie('sizetheme', size, 30);
    setHtmlClass();
}

export const setColorCookie = (color) => {
    setCookie('colortheme', color, 30)
    setHtmlClass();
}