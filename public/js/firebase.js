// Initialize Firebase
 var config = {
   apiKey: "AIzaSyBpzekMjJjxof9bUXVZM9OEBe8i9HlIlgc",
   authDomain: "bitacora-9f5f9.firebaseapp.com",
   databaseURL: "https://bitacora-9f5f9.firebaseio.com",
   projectId: "bitacora-9f5f9",
   storageBucket: "bitacora-9f5f9.appspot.com",
   messagingSenderId: "850990411014"
 };
 firebase.initializeApp(config);

//Inciar sesion con facebook
$('#btn').on('click',function(){

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});
