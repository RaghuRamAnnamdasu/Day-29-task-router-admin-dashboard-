import Button from '@mui/material/Button';
import React from 'react';

export function ForgotPassword() {
  return (
    <div className="forgotPasswordPage">
      <div className="forgotPasswordContainer">
        <img src="https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQzMjIzNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" />
        <div className="forgotPasswordFields">
          <div className="firstWrapperfp">
            <h2>Forgot Your Password?</h2>
            <div className="fpDescription">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</div>
            <div className="emailfp">
              <input type="text" placeholder="Enter Email Address..." />
            </div>
            <Button type="button" className="forgotPasswordButton">Reset Password</Button>
          </div>
          <hr className="divider"></hr>
          <div className="secondWrapperfp">
            <a href="#">Create An Account!</a>
            <a href="#">Already have an account? Login!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
