import React, { Component } from 'react'


export class Form extends Component {

    render() {
        console.log(this.props.backIcon)

        return (
           <form style={formStyles} className='longinform' action="">
               <div className='logoHeader'> <i onClick={this.props.checkPage} style={{cursor:'pointer',alignSelf: 'center', fontSize:'1.5rem', color:'white', display: this.props.backIcon === true ? "block" : 'none'}} className="fas fa-arrow-circle-left"></i> </div>
               <input required type="email" name="" id="" className="email" placeholder="Email"/>
               <input type='password' name="" id="" className="password" placeholder="Password"/>
               <input style={{display: this.props.backIcon === true ? "block" : 'none'}} type='password2' name="" id="" className="password" placeholder="Confirm Password"/>
               <input style={{cursor:'pointer'}} type="submit" value={this.props.backIcon === true ? "Sign Up" : "Sign In"} name="" id="" />
               <a  style={{cursor:'pointer',placeSelf: 'center', color: 'white'}} onClick={this.props.checkPage} href="#">{this.props.backIcon === true ? "Sign In" : "Sign Up"}</a>
           </form>
        )
    }
}

const formStyles = {
    width: "20vw",
    border: "1px solid white",
    borderRadius: '5px',
    gridTemplateRows: '70px 50px 50px 50px 50px',
    display: 'grid',
    padding: '20px',
    gridGap: '8px'
}

export default Form
