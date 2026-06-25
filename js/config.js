const APP_BASE = (() => {

    const path =
        window.location.pathname;

    if (
        window.location.hostname ===
        "abhishekn-pwms.github.io"
    ) {
        return "/PWMS2";
    }

    return "";

})();


function initializeAppIcon() {

    let favicon =
        document.querySelector("link[rel='icon']");

    if (!favicon) {

        favicon =
            document.createElement("link");

        favicon.rel = "icon";

        document.head.appendChild(favicon);
    }

    favicon.href =
        APP_BASE + "/favicon.ico";
}


function appUrl(path) {

    return APP_BASE + path;
}



const APP_CONFIG = {

    APP_NAME: "PWMS 2",

    VERSION: "2.0",

    AUTH_ENABLED: true,

    AUTH_MODE: "GOOGLE",

    ALLOWED_EMAILS: [
        "abhishek.n.space@gmail.com",
        "abhishek.nandrajog@gmail.com"
    ],

    LOCALE: "en-IN",

    TIMEZONE: "Asia/Kolkata"

};
