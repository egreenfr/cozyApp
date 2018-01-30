// const redirectUrl = "http://localhost:3000/#/cozy-sso-success";
const redirectUrl = "https://app.egreen.fr/#/cozy-sso-success";

let query = window.location.search;
window.location.replace(redirectUrl + query );
