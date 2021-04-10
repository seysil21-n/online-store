import logo from '../assets/logo.png' 
import '../styles/navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'

class TopNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
        this.expandMenu = this.expandMenu.bind(this)

        console.log(this.props.cartItems)
    }

    expandMenu = () => {
        var x = document.getElementById("menu");
        x.style.display =="flex" ? x.style.display = "none" : x.style.display = "flex"
    }

    componentDidMount(){
        var x = document.getElementById("menu");

        window.onresize = () => {
            if(window.innerWidth > 899){
                x.style.display = 'none'

            }
            console.log('ss')
        }
        
    }



    render(){
        return (
            <nav className='nav-bar'>
                <span className="menu-span">
                    <Link style={{color: '#0093FF', fontWeight: '900'}} to='#' className='font'>{ 'Dumia' }</Link>
                    <Link onClick={this.props.logout} style={{display: this.props.isLoggedIn ? 'inline': 'none'}} to={'/'} className='font'>{ 'Logout' }</Link>
                    <a className='font account'>{this.props.username}</a>
                    <a className="cart" style={{display:  this.props.isLoggedIn ? "inline": 'none'}}>  <i class="fas fa-shopping-cart"></i> {' '} <span className="itemsInCartCount">{this.props.cartItems.length} </span></a>
                    <a style={{display:  this.props.showSettings !== false? 'inline': 'none'}} className='font'>Settings</a>
                    <a className='font'>Contact Us</a>
                </span>
                <a className="icon" onClick={this.expandMenu}><i class="fa fa-bars"></i></a>
                <span>
                    <input style={{display: this.props.showSearch !== false ? 'inline' : 'none'}}  className='input font btn' placeholder='Search'/>
                    <button style={{display: this.props.showSearch !== false ? 'inline' : 'none'}} className='btn font'>Search</button> 
                </span>
                <span className="menu" id="menu">
                    <p className='mL'><Link onClick={this.props.logout} to={ this.props.isLoggedIn ? '/home': '/'} className='font'>{ this.props.isLoggedIn ? "Logout" : 'Home'}</Link></p>
                    <p className='mL'><a className='font account'>{this.props.username}</a></p>
                    <p className='mL'><a className="cart" style={{display:  this.props.isLoggedIn ? "inline": 'none'}}>  <i class="fas fa-shopping-cart"></i> {' '} <span className="itemsInCartCount">{this.props.cartItems.length}</span> </a></p>
                    <p className='mL'><a style={{display:  this.props.showSettings !== false? 'inline': 'none'}} className='font'>Settings</a></p>
                    <p className='mL'><a className='font'>Contact Us</a></p>
                </span>
            </nav>
        )
    }
}

export {TopNavBar}