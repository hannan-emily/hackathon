import React,{Component} from 'react'
import {Row, Col, Icon, Button} from 'react-materialize';
import { Link } from 'react-router-dom';

class VolunteerNext extends Component{

    render(){
        return(
          <div className="row">
            <div className="col s12">

              <div className='main-map'>
              <div className='col s3 offset-s9'>
              <Link to='/VolunteerNext2'><Button floating large className='red'waves='light' icon='arrow_forward'>
              </Button></Link>
              </div>
                  <h2>Route 2</h2>
                  <img className='map-img' src='./hero1.png' alt='Map 1'/>

                  <table>
                      <thead>
                      <tr>
                          <th></th>
                          <th>Items</th>
                          <th>Pickup Location</th>
                          <th></th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                          <td></td>
                          <td>Noodles</td>
                          <td>336 26th Ave</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Gushers</td>
                          <td>336 26th Ave</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Strawberry Juice</td>
                          <td>336 26th Ave</td>
                      </tr>
                      </tbody>
                  </table>
                  </div>

            </div>
          </div>

        )
    }
}
export default VolunteerNext
