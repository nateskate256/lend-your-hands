import firebaseAuth from "../firebase"

export default {
  signInWithEmailPassword: function (email, password) {
    firebaseAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user.toJSON()
        console.log(user)
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log(error)
      });
  },

  signUpWithEmailPassword: function (email, password) {
    firebaseAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed Up
        var user = userCredential.user.toJSON();
        console.log(user)
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        console.log(error)
      });
  },
};
