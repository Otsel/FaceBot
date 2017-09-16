$(document).ready(function() {

  ///FB SDK INIT
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId            : '110446862999562',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);

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

  //Generate Sentence Parts and Store Them
  var pronoun = getRandomInt(0,pronouns.length);
  pronoun = pronouns[pronoun];
  var adjective = getRandomInt(0,adjectives.length);
  adjective = adjectives[adjective];
  var verb = getRandomInt(0,verbs.length);
  verb = verbs[verb];
  //Assemble String
  var string = String(pronoun) + " " + String(adjective) + " " + String(verb);
  console.log(string);
  //Print String
  $('.string').html(string);

  $('#generateButton').on('click', function(){
    //Generate Sentence Parts and Store Them
    var pronoun = getRandomInt(0,pronouns.length);
    pronoun = pronouns[pronoun];
    var adjective = getRandomInt(0,adjectives.length);
    adjective = adjectives[adjective];
    var verb = getRandomInt(0,verbs.length);
    verb = verbs[verb];
    //Assemble String
    var string = String(pronoun) + " " + String(adjective) + " " + String(verb);
    console.log(string);
    //Print String
    $('.string').html(string);
  });

});
});
