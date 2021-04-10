import React from 'react';
import '../styles/Store.css'
import {Card} from '../components/card'
import {Empty} from '../components/empty'
import {items} from '../items'
import {Link} from 'react-router-dom'
 

export default class Store extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.setState({items: items})
    }

    render(){
        return (
            <div className="grid items-grid grid-container--fill">
                {this.state.items.length ? this.state.items.map((item, index)=>(
                    <Link  style={{textDecoration: 'none'}} to={`/items/${item.id}`}><Card key={item.id} guest={this.props.guest} item={item} addToCart={this.props.addToCart.bind(this,[item])}/></Link> 
                )): <Empty/>}
            </div>
        )
    }
}