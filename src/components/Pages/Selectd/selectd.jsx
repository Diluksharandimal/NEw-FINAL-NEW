import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./select.css";
import { supabase } from "../../../client";

function Department() {
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact_no, setContact] = useState("");
  const [Age, setAge] = useState("");
  const [Gender,setGender] = useState("");
  const [Email,setEmail] = useState("");
  const [Postal_code,setPost] = useState("");
  const [L_name,setLname] = useState("");
  const [F_name,setFname] = useState("")
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!NIC || !L_name || !DOB || !Address || !Contact_no || !Age) {
      setFormError("Please fill the correct values");
      return;
    }
    const { data, error } = await supabase
      .from("Customer")
      .insert([{ NIC, DOB, Address, Contact_no, Age, Gender,Email,Postal_code, L_name,F_name}]);

    if (error) {
      console.log(error);
      setFormError("Please fill in the all blanks");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  };

  return (
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <img src="" />
        <form onSubmit={handleSubmit}>
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
                value={F_name}
                onChange={(e)=> setFname(e.target.value)}
                required
              />

              <input
                type="text"
                name="L_name"
                id="L_name"
                placeholder="Last name"
                class="formbold-form-input"
                value={L_name}
                onChange={(e)=> setLname(e.target.value)}
                required
              />
            </div>
          </div>

          <div class="formbold-mb-3">
            <label for="age" class="formbold-form-label">
              {" "}
              NIC{" "}
            </label>
            <input
              type="text"
              name="NIC"
              id="NIC"
              placeholder="ex:25"
              class="formbold-form-input"
              value={NIC}
              onChange={(e)=> setNIC(e.target.value)}
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
              value={Age}
              onChange={(e)=> setAge(e.target.value)}
              required
            />
          </div>

          <div class="formbold-mb-3">
            <label for="dob" class="formbold-form-label">
              {" "}
              Date of Birth{" "}
            </label>
            <input
              type="date"
              name="DOB"
              id="DOB"
              class="formbold-form-input"  
               value={DOB}
              onChange={(e)=> setDOB(e.target.value)}

              required
            />
          </div>

          <div class="formbold-mb-3">
            <label class="formbold-form-label">Gender</label>

            <select
              class="formbold-form-input"
              name="Gender"
              id="Gender"
              onChange={(e)=> setGender(e.target.value)}
              
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
              value={Email}
              onChange={(e)=> setEmail(e.target.value)}
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
              value={Address}
              onChange={(e)=> setAddress(e.target.value)}
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
                value={Postal_code}
                onChange={(e)=> setPost(e.target.value)}
                required
              />

              <input
                type="text"
                name="Contact_no"
                id="Contact_no"
                placeholder="Phone number"
                class="formbold-form-input"
                value={Contact_no}
                onChange={(e)=> setContact(e.target.value)}
                required
              />
            </div>
          </div>
           
          </div>

          <div class="formbold-mb-3">
            <label for="upload" class="formbold-form-label">
              Upload your Photo
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
              Upload Front side of NIC
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
              Upload Back side of NIC
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
              Upload Medical
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
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
}

export default Department;
