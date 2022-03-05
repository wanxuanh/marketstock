import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import React, { useState } from "react";
import Form from "./components/Form";
import Trade from "./Pages/Price";
import CompanyInfo from "./Pages/CompanyInfo";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./Pages/About";
import image1 from "./finance.jpg";

//const firebaseApp = firebase.initializeApp(firebaseConfig);

function App() {
  // const { user, signOut, signInWithGoogle } = this.props;

  const [stockTitle, setStockTitle] = useState("AAPL");

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    // const title = data.Title;
    setStockTitle(title);
  };

  return (
    <div className="App">
      <Navbar />
      <h2 className="subject">Welcome to Stock M App</h2>
      <img src={image1} alt="image" class="image" />

      {/* <Form handleSubmit={handleSubmit} /> */}
      {/* <Trade stockTitle={stockTitle} /> */}
      {/* {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
      {user ? (
        <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          )} */}
      <Outlet />
    </div>
  );
}
// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);

export default App;
