window.fbAsyncInit = function() {
  FB.init({
    appId            : '110446862999562',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
///End FB Init

//Get Random Integer
 function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min
 }
