import React from 'react';
//import '../App.css';

class App{
  render() {
    return (
      <div  className="G">
        <div  className="card">
          <div className="card-header">PATIENT MEDICAL RECORD</div>
          <div  className="div2">
          <div className="c1">Update Currently 
taking medicines</div>
          <hr class="hr1"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="div3">
          <div className="c2">Update Medical History</div>
          <hr class="hr2"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="div4">
          <div className="c3">Update Surgeries</div>
          <hr class="hr3"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          <button class="button">Submit</button>
          </div>
          </div>
        </div>
    );
  }
}
   
export default App;