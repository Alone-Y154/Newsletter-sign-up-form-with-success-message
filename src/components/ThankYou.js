import "./styles.css";

export const ThankYou = (props) => {
return (

    <div className="container">




     <div className="thank-you-container">


      <div className="thank-you">
        <img src="assets/images/icon-list.svg" alt="icon-list" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>{props.userMail}</span>.
    Please open it and click the button inside to confirm your subscription.</p>
      <button onClick={props.thankYou} type="submit" name="button">Dismiss message</button>
      </div>

    </div>

      </div>
      )

}