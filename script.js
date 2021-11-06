///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var sitePath = location.pathname;
    site = sitePath.lastIndexOf('/')+1;
    siteName = sitePath.substring(site);
var replaceTo = "";
var account = document.getElementById('account');
////////////////////////////////////////
if (siteName == "sign_in.html") {
    console.log("» sign in");
    replaceTo = "sign_up";
}
////////////////////////////////////////
if (siteName == "sign_up.html") {
    console.log("» sign up");
    replaceTo = "sign_in";
}
////////////////////////////////////////
if (siteName == "console.html") {
    console.log("» console");
}
////////////////////////////////////////
function Replace() {
  document.location.replace(replaceTo +".html");
}
////////////////////////////////////////

