import React,{Component} from 'react'

class RecieverProfile extends Component{
    render(){
        return(
            <div>
                <h1 className='center'>Food Bank</h1>
                <hr />
                <div>
                <form>
                    <div className="switch">
                        Canned Fruit
                        <label>
                        Low Need
                        <input type="checkbox" checked value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Canned Veggies
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Noodles
                        <label>
                        Low Need
                        <input type="checkbox" checked value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                    < br/>
                    <div className="switch">
                        Rice
                        <label>
                        Low Need
                        <input type="checkbox" value='fruit' onChange={this.changeNeed} />
                        <span className="lever"></span>
                        High Need
                        </label>
                    </div>
                </form>
                </div>

                <div className='organization-info'>
                    <h2>Contact Email: main@foodbank.com</h2>
                    <h2>Contact Phone: (555)555-5555</h2>
                    <h2>Address: 123 N Main St</h2>
                    <h2>City: Seattle</h2>
                    <h2>State: Wa</h2>
                    <h2>Delivery Hours: Mon-Sun 9am - 10pm</h2>
                    <hr/>
                    <h2 className='center'>List of Approved Contacts</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Emily</td>
                            <td>555-555-5551</td>
                            <td>Emily@foodbank.com</td>
                            <td>Director</td>
                        </tr>
                        <tr>
                            <td>Kyle</td>
                            <td>555-555-5550</td>
                            <td>Kyle@foodbank.com</td>
                            <td>Donation Manager</td>
                        </tr>
                        <tr>
                            <td>Mo</td>
                            <td>555-555-5552</td>
                            <td>Mo@foodbank.com</td>
                            <td>Facilities Manager</td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>555-555-5553</td>
                            <td>John@foodbank.com</td>
                            <td>Volunteers Manager</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <a className='btn'>Edit Info</a>
                <br />
            </div>
        )
    }
}
export default RecieverProfile
