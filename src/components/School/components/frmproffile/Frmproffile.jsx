import React from 'react'
import './Frmpff.css'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../../../variants';
import Navbar3 from '../Navbar3/Navbar3';


const Frmproffile = () => {
    return (

<div>

        <Navbar3/>

        <motion.div

variants={fadeIn("right", 0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once:false, amount:0.7}}

>
    <center><p className="font-bold text-6xl md:px-12 p-4 max-w-screen-2xl mx-auto mt-36 text-blue-900 ml-14 " >Make your profile to show your details to customers</p></center>
</motion.div>

    

        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <img src="" />
            <form>
              <div class="formbold-input-wrapp formbold-mb-3">
                <label for="firstname" class="formbold-form-label">
                  {" "}
                  Name{" "}
                </label>
    
                <div>
                  <input
                    type="text"
                    name="F_name"
                    id="F_name"
                    placeholder="First name"
                    class="formbold-form-input"
                 
                    required
                  />
    
                  <input
                    type="text"
                    name="L_name"
                    id="L_name"
                    placeholder="Last name"
                    class="formbold-form-input"
                   
                    required
                  />
                </div>
              </div>
    
              <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label">
                  {" "}
                  NIC of the owner{" "}
                </label>
                <input
                  type="text"
                  name="NIC"
                  id="NIC"
                  placeholder="ex:25"
                  class="formbold-form-input"
                 
                  required
                />
              </div>
              
              <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label">
                  {" "}
                  Age{" "}
                </label>
                <input
                  type="text"
                  name="Age"
                  id="Age"
                  placeholder="ex:25"
                  class="formbold-form-input"
                  required
                />
              </div>
    
              <div class="formbold-mb-3">
                <label for="dob" class="formbold-form-label">
                  {" "}
                  Date of Started{" "}
                </label>
                <input
                  type="date"
                  name="DOB"
                  id="DOB"
                  class="formbold-form-input"  
    
                  required
                />
              </div>
    
              <div class="formbold-mb-3">
                <label class="formbold-form-label">Gender</label>
    
                <select
                  class="formbold-form-input"
                  name="Gender"
                  id="Gender"
                  
                >
    
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                  
                </select>
              </div>
    
              <div class="formbold-mb-3">
                <label for="email" class="formbold-form-label">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="example@email.com"
                  class="formbold-form-input"
                  required
                />
              </div>
    
              <div class="formbold-mb-3">
                <label for="address" class="formbold-form-label">
                  {" "}
                  Address{" "}
                </label>
    
                <input
                  type="text"
                  name="Address"
                  id="Address"
                  placeholder="Street address"
                  class="formbold-form-input formbold-mb-3"
                
                  required
                />
    
              <div class="formbold-mb-3 formbold-input-wrapp">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Phone{" "}
                </label>
    
                <div>
                  <input
                    type="text"
                    name="Postal_code"
                    id="Postal_code"
                    placeholder="Area code"
                    class="formbold-form-input formbold-w-45"
                    required
                  />
    
                  <input
                    type="text"
                    name="Contact_no"
                    id="Contact_no"
                    placeholder="Phone number"
                    class="formbold-form-input"
                    required
                  />
                </div>
              </div>
               
              </div>
    
              <div class="formbold-mb-3">
                <label for="upload" class="formbold-form-label">
                  Upload the Photo
                </label>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  class="formbold-form-input formbold-form-file"
                />
              </div>
              <div class="formbold-mb-3">
                <label for="upload" class="formbold-form-label">
                  Upload further details
                </label>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  class="formbold-form-input formbold-form-file"
                />
              </div>
              <div class="formbold-mb-3">
                <label for="upload" class="formbold-form-label">
                 Upload the approval of the MTD
                </label>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  class="formbold-form-input formbold-form-file"
                />
              </div>
            
            
    
              <div class="formbold-checkbox-wrapper">
                <label for="supportCheckbox" class="formbold-checkbox-label">
                  <div class="formbold-relative">
                    <input
                      type="checkbox"
                      id="supportCheckbox"
                      class="formbold-input-checkbox"
                    />
                    <div class="formbold-checkbox-inner">
                      <span class="formbold-opacity-0">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          class="formbold-stroke-current"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="" fill="white" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  I agree to the defined
                  <a href="#"> terms, conditions, and policies</a>
                </label>
              </div>
    
              <button class="formbold-btn">Submit</button>
             
            </form>
          </div>
        </div>
        </div>
        
       
        )
    
}

export default Frmproffile
