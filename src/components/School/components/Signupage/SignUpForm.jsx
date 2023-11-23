import React from "react";
import * as Components from './signup';
import Navbar2 from '../Applipge/Navbar2';
import Navbar from "../Schomepge/Navbar";
import Navbar3 from "../Navbar3/Navbar3";
import Head from "../Navbar3/Navbar3";

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../../variants';








function SignUpForm() {
    const [signIn, toggle] = React.useState(true);

 
    
    
     return(
      <div>
      <Navbar3/>   

      <motion.div
      
      variants={fadeIn("up", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
      
      >
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Enter Name'/>
                     
                     <Components.Input type='email' placeholder='Email'/>
                     <Components.Input type='password' placeholder='Password'/>
                    
                     
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='Fogp'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>

         </motion.div>
         
         </div>
     )
}

export default SignUpForm;