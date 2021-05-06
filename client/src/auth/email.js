import firebaseAuth from "../firebase"

export default {
  signInWithEmailPassword: function (email, password) {
    // [START auth_signin_password]
    firebaseAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user.toJSON()
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
      });
    // [END auth_signin_password]
  },

  signUpWithEmailPassword: function (email, password) {
    // [START auth_signup_password]
    firebaseAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user.toJSON();
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
        // ..
      });
    // [END auth_signup_password]
  },
  sendEmailVerification: function () {
    // [START auth_send_email_verification]
    firebaseAuth
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
      });
    // [END auth_send_email_verification]
  },
  sendPasswordReset: function () {
    const email = "sam@example.com";
    // [START auth_send_password_reset]
    firebaseAuth
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_send_password_reset]
  },
};
