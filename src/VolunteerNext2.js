import React,{Component} from 'react'
import {Row, Col, Icon, Button} from 'react-materialize';
import { Link } from 'react-router-dom';


class VolunteerNext2 extends Component{

    render(){
        return(
          <div className="row">
            <div className="col s12">

              <div className='main-map'>
              <div className='col s3 offset-s9'>

              </div>
                  <h2>Stop 1</h2>
                  <img className='map-img' src='./hero2.png' alt='Map 1'/>
                    <h2>Please Proceed to 730 14th Ave</h2>
                    <hr />
                    <h5>Items to be dropped off</h5>
                  <table>
                  
                      <thead>
                      <tr>
                          <th></th>
                          <th>Items</th>
                          <th>Qty.</th>

                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                          <td></td>
                          <td>Avacodo</td>
                          <td>5</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Canned Tomatoes</td>
                          <td>30</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Tinned Achovies</td>
                          <td>10</td>
                      </tr>
                      </tbody>
                  </table>
                  </div>
                  <Link to='/VolunteerNext3'><Button floating large className='red'waves='light' icon='arrow_forward'>
              </Button></Link>
            </div>
          </div>

        )
    }
}
export default VolunteerNext2
