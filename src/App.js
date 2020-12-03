import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {downloadType: "",};
    

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Download Type Selected!!!!!",e.target.value);
    this.setState({ downloadType: e.target.value });
    if (this.state.downloadType==="Download as PDF") {
      
      
    }
  }

       render() {               
               return (<React.Fragment>
                       <table style={{width:'60%'}} className='table'>
                            {/* <thead className="thead-light">
                              <tbody>
                                <tr>
                                     <th></th>
                                     <th></th>
                                     <th></th>
                                </tr></tbody>
                            </thead> */}
                            <tbody>
                                 
                                 
                            <tr><td><div class="feild">Username :<input type="text" id="Username"/><label htmlFor="Username">  </label></div>  </td></tr>
                            <tr><td><label htmlFor="Template Name">Tempelate Name : </label></td>
                            <td><select id="Template Name">
                            <option value="" defaultValue disabled hidden>---------Select Tempelate---------</option>
                              
                              </select>
                              <button>Apply</button></td></tr>

                                      <tr><td><label htmlFor="Report Type">Choose Downoad Type : </label></td>
                                          <td><select id="Report Type" onChange={this.handleChange}>
                                            
                                            <option value="" defaultValue disabled > </option>
                                            <option value="Download as PDF">Download as PDF</option>
                                            <option value="ATS Report">ATS Report</option>
                                            <option value="Mass Artwork Download">Mass Artwork Download</option>
                                            <option value="Mass MSPR Download">Mass MSPR Download</option>
                                            <option value="Parts and Specification Report">Parts and Specification Report</option>
                                            <option value="Part Library Report">Part Library Report</option>
                                            <option value="Refrence Document Report">Refrence Document Report</option>
                                            <option value="Where Used Report">Where Used Report</option>
                                            
                                          </select></td></tr>
                                      <td></td>
                                  
                            </tbody>
                       </table>
                       
               </React.Fragment>
               )  
       }
}
export default App;
