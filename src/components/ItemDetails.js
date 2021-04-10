import React, { Component } from 'react'
import '../styles/itemDetail.css'
import {items} from '../items'
import {Redirect} from 'react-router-dom'


export class ItemDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            fill: [{}],
            notFound:false
        }
        
    }

    componentDidMount(){
       let fill = items.filter(item => item.id === parseInt(this.props.match.params.id) )

       if(fill[0] === undefined){
           this.setState({notFound: true})
       }

       this.setState({fill : fill})
       console.log(fill)
    //    console.log(fill)
    }

    render() {
        return (
            
            <>

            <div className="itemDetailsContainer">

                <img style={{width: '100%',height:'400px'}} src={`${this.state.fill[0].image}`} className="itemImage" />
                <div className="itemDescription">
                    <div className="itemDescriptionCloseContainer">
                        <div className="actualDescriptionHeaders">
                            <h4>{this.state.fill[0].title}</h4>
                            <h4>{this.state.fill[0].metatitle}</h4>
                            {/* <hr/> */}
                            <p>{this.state.fill[0].description}</p>
                        </div>
                        <a style={{display: this.props.guest ? 'none': 'grid'}} onClick={this.props.addtocart.bind(this, this.state.fill)} className="addToCartBtn">
                            Add to Cart
                        </a>
                    </div>
                </div>
                

            </div>
            </>
        )
    }
}

export default ItemDetails
