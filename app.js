// const redirectUrl = "http://localhost:8000/api/sso/authorize?sso_url=";
const redirectUrl = "https://app.egreen.fr/api/sso/authorize?sso_url=";

let currentUrl = window.location.href;
let arr = currentUrl.split("/");
let currentHost = arr[2];

let scope = 'fr.enedis.api.meteringdata.loadcurve:GET io.cozy.settings:GET';

window.location.replace(redirectUrl + currentHost + '&scope=' + scope);
