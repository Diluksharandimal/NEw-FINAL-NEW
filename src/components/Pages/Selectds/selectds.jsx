import { useState } from 'react';
import './selectds.css';

const Selectds=()=>{ 
    const [selectedValue, setSelectedValue ]= useState(''); 
    const handleDropdownChange = (event) => {setSelectedValue(event.target.value);};
    return(
        <div class="rgiregiall">
        <div class="r2wrapper">
        
        <div class="r2title">Select Diving School
        </div>
        <form action="POST" data-netlify="true">
          <div class="r2form">
    
    
            <div class="r2inputfield">
              <label class="r2lbl">Select Here</label>
              <div class="custom_select">
                <select id="state" name="state" value={selectedValue} onChange={handleDropdownChange} required>
                  <option value="">--Select your District--</option>
                  <option value="danupa">Galle</option>
                  <option value="sangeeth">Mathara</option>
                  
                
                </select>
              </div>
            </div>
    
           </div>
        </form>
      </div>
      <div>
         {selectedValue === 'danupa' && (<div><ul><li>kalna</li> <li>Diluksha</li></ul></div>)}
         {selectedValue === 'sangeeth' && (<div></div>)} 
       
      </div>
          </div>
    )
}
export default Selectds;