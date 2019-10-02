    
import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBZBYkFTdnMmGkivc6gE1ljIpDUNlkzoN0",
  authDomain: "lubna-dbd05.firebaseapp.com"
})


class SignIn extends Component {
    state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    render() {
      return (
        <div className="App">
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      )
    }
  }
  
  export default SignIn