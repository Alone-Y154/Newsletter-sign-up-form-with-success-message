import { useState } from "react";
import "./styles.css";

export const Signup = (props) => {

    const [mail, setMail] = useState("");

    const handleChange = (e) => {
        setMail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.data(mail);
    }

    return (
        <div className="container">
    
        <div className="sign-up">
          <div className="sign-up-content">
            <h1 className="sign-up-heading">Stay updated!</h1>
            <p className="sign-up-description">Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="sign-up-list">
              <p><span> <img src="assets/images/icon-list.svg" alt="icon-list"/> </span> Product discovery and building what matters</p>
              <p><span> <img src="assets/images/icon-list.svg" alt="icon-list"/> </span> Measuring to ensure updates are a success</p>
              <p><span> <img src="assets/images/icon-list.svg" alt="icon-list"/> </span> And much more!</p>
            </div>
   
            <form onSubmit={handleSubmit}>

            <div className="input">
    
              <div className="label">
                <label htmlFor="email">Email address</label>
                <p className="error"></p>
              </div>
              <input id="email"  onChange={handleChange} type="email" name="email" value={mail}  placeholder="email@company.com" required pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"/>
    
        <button type="submit" onClick={props.signup} name="button">Subscribe to monthly newsletter</button>
    
            </div>
            </form>

          </div>
    
          <div className="sign-up-img">
            <img className="sign-up-img-desktop" src="assets/images/illustration-sign-up-desktop.svg" alt="sign-up-svg-desktop" />
            <img className="sign-up-img-mobile" src="assets/images/illustration-sign-up-mobile.svg" alt="sign-up-svg-mobile" />
          </div>
        </div>

        </div>
    )
    
}