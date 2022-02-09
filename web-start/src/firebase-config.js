/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const firebaseConfig = {
  apiKey: "AIzaSyDvDCD9bcaTNGx31Og1NcPTILpooqOj1k0",
  authDomain: "friendlychat-6feac.firebaseapp.com",
  projectId: "friendlychat-6feac",
  storageBucket: "friendlychat-6feac.appspot.com",
  messagingSenderId: "765067484464",
  appId: "1:765067484464:web:b3d9f4d210a8c6dbb87cf5"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}