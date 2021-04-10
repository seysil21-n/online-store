import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../login.css'

export class login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            
        }
    

    }

    componentDidMount(){
        
    }

    

   

    render() {
        return (
            <>
                        <Redirect  to={ this.props.isLoggedIn ? '/home' : '/'} />

            <div className="mobileContainer">

                <div className='blue' >
                    <p style={{display : this.props.errorMessage.length > 1 ? "inline" : 'none' }} className="error">{this.props.errorMessage}</p>
                </div>

                <div className="white" ></div>

                <div className='formContainer'>

                    <form id='loginform' action="">

                        <h3 className="logo">Dumia</h3>
                        <input onChange={this.props.updateField} required placeholder='Email' type="email" name="email" id=""/>
                        <input onInput={this.props.updateField} required placeholder="Password" type="password" name="password" id=""/>
                        <Link to="/home" onClick={this.props.gotoStore} className="logBtn"> Log in</Link>
                        <Link className="continueAsGuest" style={{textAlign: 'center'}} to='/home' onClick={this.props.AsGuest}>Continue as Guest</Link>

                    </form>

                </div>
            </div>
            </>
        )
    }
}

export default login
