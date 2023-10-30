import React from 'react'
import { useState, useContext } from 'react'
import AuthContext from "../context-Api/AuthProvider";
import { useForm } from 'react-hook-form';
function Signup() {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [lastName, setlastName] = useState("");
  const [orgName, setorgName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuth } = useContext(AuthContext);
  const handlerSubmit = async e =>{
    e.preventDefault();
    const jsonData = {
     
      "email": email,
      "first_name": firstname,
      "tel":tel,
      "last_name":lastName,
      "org_name":orgName
      
    };
    try {
      const response = await fetch(`https://augmntx.com/api/register?email=${email}firstname=${firstname}tel=${tel}lasName=${lastName}orgName=${orgName}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(jsonData)
      })
      .then(data => data.json(email,firstname,tel,lastName,orgName))
      const accessToken = response?.data?.accessToken;
      setAuth({ email, accessToken });
      console.log(response)
      setSuccess(true)
      alert(response.password)
      window.location.href ="/login"
    } catch (error) {
      if (!errMsg?.response) {
         setErrMsg("No Server Response");
         
      }
    }
    
  }

 

  return (
    <div>
        <section className="wrapper bg-soft-primary signup">
            <div className="container pt-2 pb-12 pt-md-2 pb-md-2">
             <div className="row mt-1"> <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <h2 className="display-4 mb-3 text-center " id='hire'>Hire the best dedicated developers</h2>
               <p className="lead text-center mt-4 mb-0">Hire pre-vetted developers with strong technical and communication skills at unbeatable prices. </p>
                <p className="lead text-center mb-2">If you decide to stop within one week, you pay nothing.</p>
                
                 <div className="mb-2 pb-2 text-center"></div>
                 { success?  (
                  <div class="alert alert-success" role="alert">
                    <h4 className='text'>Registeration Is Successful !</h4>
                  </div>
                  ):
                  ( <div>
                  <form action="https://www.augmntx.com/hire_ios_dev" 
            
                  className='needs-validation was-validated'
                  onSubmit={handlerSubmit}
                  method="post"
                  novalidate
                  style={{color:"rgb(139 149 168)"}}>
                   <div className="row gx-4"> 
                   <div className="col-md-6">
                    <div className="form-floating mb-4"> 
                    <input 
                    id="validationCustom01"
                     type="text" 
                     name="reg_first_name" 
                     className="form-control" 
                     placeholder="Jane"
                     onChange={(event) => setFirstName(event.target.value)}
                      required
                       value={firstname}/> 
                    <label for="validationCustom01">Name *</label>
                
                   
                      <div className="invalid-feedback"> Please enter your first name. </div>
                    </div>
                    </div> 
                <div className="col-md-6">
                <div className="form-floating mb-4">
                     <input id="reg_last_name"
                      type="text"
                      name="reg_last_name" 
                      className="form-control" 
                      placeholder="Jane"
                      onChange={(event) => setlastName(event.target.value)} 
                      required value={lastName}/>
                      <label for="validationCustom03">Job Title *</label> 
                     {/* <div className="valid-feedback"> Looks good! </div>  */}
                     <div className="invalid-feedback"> Please enter your last name. </div>
                </div> 
                </div> 
                </div>
                     <div className="row gx-4"> 
                     <div className="col-md-6">
                     <div className="form-floating mb-4"> 
                     <input id="reg_name"
                      type="text" 
                      name="reg_name" 
                      className="form-control" 
                      onChange={(event) => setorgName(event.target.value)}
                      placeholder="Company" required value={orgName}/>
                      <label for="validationCustom03">Company Name *</label> 
                     {/* <div className="valid-feedback"> Looks good! </div>  */}
                     <div className="invalid-feedback"> Please enter your company name. </div> 
                     </div>
                </div>
                     <div className="col-md-6"> 
                     <div className="form-floating mb-4"> 
                     <input id="reg_email"
                      type="email"
                      name="validationCustom03" 
                      className="form-control"
                      onChange={(event) => setEmail(event.target.value)} 
                      placeholder="email@domain.com" required value={email}/> 
                     <label for="validationCustom03">Work Email *</label> 
                     {/* <div className="valid-feedback"> Looks good! </div>  */}
                     <div className="invalid-feedback"> Please enter your email address. </div> 
                     </div>
                     </div> 
                     </div> 
                     <div className="row gx-4"> 
                     <div className="col-md-6"> 
                     <div className="form-floating mb-4"> 
                     <input id="reg_tel"
                      type="number"
                      name="validationDefault05" 
                      onChange={(event) => setTel(event.target.value)}
                      className="form-control" 
                      placeholder="9876543210" 
                      pattern="[6789][0-9]{9}" 
                      maxLength="10" required value={tel} /> 
                     <label for="validationDefault05">Phone *</label> 
                     {/* <div className="valid-feedback"> Looks good! </div> */}
                     <div className="invalid-feedback"> Please enter your phone. </div>
                     </div> 
                     </div> 
                     <div className="col-md-6"> 
                     <div className="form-select-wrapper mb-4"> 
                     <select className="form-select" 
                     aria-label="Default select example" 
                     name="reg_mode"

                     required style={{color:"rgb(139 149 168)"}}> 
                     <option value="">How did you hear about us? *</option> 
                     <option value="Email">Email</option> 
                     <option value="Search engine">Search engine</option> 
                     <option value="Social media">Social media</option> 
                     <option value="Others">Others</option> 
                     </select> 
                     </div> 
                     </div> 
                     </div> 
                     <div className="col-12 text-center mt-5"> 
                     <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3 signup-submit" value="Submit"/>
                      <p className="text-muted" style={{fontSize:"18px", color:"#aab0bc !important"}}><strong>*</strong> These fields are required.</p>
                     </div> 

                     </form> 
               </div>
                  )}
                
                  
                
              
                     </div> 
                     </div> 
                     </div>





        </section>

    </div>
  )
}

export default Signup