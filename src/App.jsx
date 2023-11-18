import React from "react";
import Authenticate from "./Authenticate.jsx";
import SignUpForm from "./SignUpForm.jsx";
import { useState } from "react";

const App = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);



  


  return (
    <>
      <Authenticate />
      <SignUpForm />
        
    </>
  )
  }


export default App;
