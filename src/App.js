import Store from './screens/Store'
import {TopNavBar} from './components/navbar'
import { Footer } from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import ItemDetails from './components/ItemDetails'
import AddedToCart from './components/addedToCartModal'
import Login from './components/Login'

import React, { Component } from 'react'

 class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      errorMessage:'',
      isLoggedIn: false,
      settings: false,
      search: false,
      guest: false,
      cart: [],
      justAddedToCart: {},
      addingToCartMessage: ""

    }

    console.log(this.state.cart)

    this.updateField = this.updateField.bind(this)
    this.gotoStore = this.gotoStore.bind(this)
    this.logout = this.logout.bind(this)
    this.addtocart = this.addtocart.bind(this)
  }

  updateField(event){
    console.log(this.state)

    this.setState({
      [event.target.name] : event.target.value
    })
  }

  gotoStore(event){
      if(this.state.email.length > 4 || this.state.password.length > 4){
            
            this.setState({isLoggedIn: true, settings: true, search: true, guest: false})
            console.log(event.target)
        }
        else{
            this.setState({errorMessage: 'Please enter a valid Email, and Password'})
            event.preventDefault()

        }

        if(this.state.email === '' && this.state.password === ''){
            this.setState({errorMessage: 'Please enter your email and password'})
        }
  }

    logout(event){
      if(event.target.textContent == 'Logout'){
        this.setState({
          email: '',
          password: '',
          errorMessage:'',
          isLoggedIn: false,
          settings: false,
          search: false,
          cart: [],
        })
      }
      

   
     
      
    }

    addtocart(clickeditem,event){
      let {title, image,id} = clickeditem[0]



      let filterCart = this.state.cart.filter(item => item.id == id )
      console.log(filterCart)

      // check to see if item is already added to cart
      if(filterCart.length > 0){
        // alert(`${title} is already in cart`)
        this.setState({addingToCartMessage: 'Already in Bag'})
        document.querySelector('.modalContainer').style.display = 'grid'

      }else{
        this.setState({cart: [...this.state.cart,{title, image,id}]})

        // alert('Item Added to Cart')
        document.querySelector('.modalContainer').style.display = 'grid'
        this.setState({justAddedToCart: {title, image,id}, addingToCartMessage: 'SUCCESSFULLY ADDED TO BAG!'})

      }
       
      
      
      // console.log(this.state.cart, s)
      // console.log(this.state.cart)
    };

    AsGuest= () =>{
      this.setState({guest: true})
    }


  render() {
    return (
      <>
      <Router>
      <AddedToCart addingToCartMessage={this.state.addingToCartMessage} itemName={this.state.justAddedToCart.title} image={this.state.justAddedToCart.image}/>

        <TopNavBar cartItems={this.state.cart} logout={this.logout} isLoggedIn={this.state.isLoggedIn} username={this.state.isLoggedIn ? this.state.email: ''} showSettings={this.state.settings} showSearch={this.state.search} />
      <Switch>

      <Route path='/' exact 
      render={(props)=> (
        <Login isLoggedIn={this.state.isLoggedIn} AsGuest={this.AsGuest} errorMessage={this.state.errorMessage} gotoStore={this.gotoStore}  updateField={this.updateField}/>
      )}
      
      />


      <Route exact path="/home" render={(props)=>(
        <Store guest={this.state.guest} addToCart={this.addtocart} />
      )}  /> 


      <Route  path="/items/:id"   render={(matchProps)=>(
        <ItemDetails {...matchProps} {...this.props} guest={this.state.guest} addtocart={this.addtocart}/>
      )} />
     
      </Switch>
      <Footer/>
      </Router>
    </>
    )
  }
}




export default App;
