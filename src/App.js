import { useState } from "react";
import { Signup } from "./components/SignUp";
import { ThankYou } from "./components/ThankYou";


function App(props) {
  const [state,setState] = useState(true);
  const [mail, setMail] = useState("");

  // const onSignUp = () => {
    
  // }

  const getData = (email) => {
    setMail(email);
    setState(!state);
  }
  const change = () => {
    setState(!state);
  };

  return (
    <>
    {state ? 
      <Signup data={getData}/> : 
      <ThankYou userMail = {mail} thankYou = {change}/>}
{/* 
      <Signup mail={inputMail} />

      <ThankYou userMail = {mail} /> */}
    </>
  );
}

export default App;
