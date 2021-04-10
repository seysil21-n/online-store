import React, { Component } from 'react'
import '../styles/addedToCartModal.css'

export class addedToCartModal extends Component {
    constructor(props){
        super(props)

        this.closeModal  = this.closeModal.bind(this)
    }

    closeModal(e){
        if(document.querySelector('.modalContainer').style.display ==='grid'){
            document.querySelector('.modalContainer').style.display = 'none'
        }
    }

    render() {
        return (
            <div style={{display: this.props.itemName ? 'grid' :'none', }} className="modalContainer">
                <div style={{border: this.props.addingToCartMessage === 'Already in Bag' ? '2px solid yellow': 'none'}} className="modal">
                    <img style={{width:300, height:'300px', objectFit:'contain'}} src={this.props.image} className='imageInModal' alt=""/>
                    <div className="textInfo">
                        <h4 className='addToCartMessage' style={{fontSize:'1.5rem', color: '#DDDDD'}}> <i class="fas fa-check"></i> {this.props.addingToCartMessage}</h4>
                        <h4>{this.props.itemName}</h4>
                        <a onClick={this.closeModal} style={{color: 'white', justifySelf: 'end',backgroundColor:'#0093FF', padding:'20px', display:'grid', placeContent:'center', borderRadius: '3px'}}> OK</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default addedToCartModal
