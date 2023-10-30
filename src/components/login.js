import React, { useState ,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AuthContext from "../context-Api/AuthProvider";
// import axios from "axios";
function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuth } = useContext(AuthContext);

  
  const handleSubmit = async e => {
    e.preventDefault();
    
    const jsonData = {
     
      "email": email,
      "password": password
      
    };
    try {
      const response = await fetch(`https://augmntx.com/api/login?email=${email}&password=${password}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(jsonData)
      })
      .then(data => data.json(email,password))
      const accessToken = response?.data?.accessToken;
      setAuth({ email, password, accessToken });
      console.log(response)
      setSuccess(true)
      window.location.href ="/profile"
    } catch (error) {
      if (!errMsg?.response) {
         setErrMsg("No Server Response");
      }
    }
  }


  

  return (
    <div className="App">
        <div className="forgot-flex-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
          
          {success ? (
        <section>
          <h3 className="text" >You are logged in!</h3>
          <br />
        </section>
      ) : (
            <div class="forgot-flex-item" >
           
            <h4 class="text">Sign in to start your session</h4>
            <form id="loginform"  onSubmit={handleSubmit}>
            
              <div className="form-group">
               
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  
                  name="email"
                  aria-describedby="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
              required
                />
               
              </div>
              <div className="form-group">
               
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                   value={password}
              required
                />
              </div>
              <p
            
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
              <button type="submit" className="btn submit-btn btn-primary">
                Continue
              </button>
              <Link to={"/forgetPassword"}>
              <div className="text-primary text-center mt-3 return-to-signin">Forgot password?</div>
              </Link>
            </form>
            </div>
      )}
            <div id="create-account" class="mt-3">
                 Don't have an account?
            <span class="text-primary">
            <Link to={"/signup"}>Sign up</Link>
            </span>
            </div>
            <div id="contactUs" className="px-2"> 
            <span>Please </span>
            <span class="text-primary">
                <a href="https://augmntx.com/contact-us">Contact us </a>
            </span> if you require any assistance </div>
          </div>
         
        </div>
      </div>
      </div>
    </div>
  );
}
export default Login;
