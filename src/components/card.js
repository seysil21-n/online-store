import React from 'react'
import '../styles/card.css'
import IMG_0362 from '../assets/IMG_0362.PNG'

// function Card(props){
//     return (
//         <div className='card-container'>
//             <img src={props.item.image.length > 0 ? props.item.image : IMG_0362} alt='image'/>
//             <div className="content">
//                 <div className="row">
//                     <span><strong>{props.item.title.length > 18 ? props.item.title.substring(0, 18) + '...':props.item.title}</strong></span>
//                     <span id='rating'><strong>{props.item.rating}</strong><sub>ratings</sub></span>
//                 </div>
//                 <span id='meta'>{props.item.metatitle.length > 23 ? props.item.metatitle.substring(0,23)+'...' : props.item.metatitle}</span>
//                 <p>{props.item.description.length > 100 ? props.item.description.substring(0, 100) + '...':props.item.description}</p>
//                 <button style={{display: this.props.guest ? 'none': 'block'}} onClick={props.addToCart}>add to cart</button>
//             </div>
            
//         </div>
//     )
// }



export default class Card extends React.Component {
    render() {
        return (
            <div className='card-container'>
            <img src={this.props.item.image.length > 0 ? this.props.item.image : IMG_0362} alt='image'/>
            <div className="content">
                <div className="row">
                    <span><strong>{this.props.item.title.length > 18 ? this.props.item.title.substring(0, 18) + '...': this.props.item.title}</strong></span>
                    <span id='rating'><strong>{this.props.item.rating}</strong><sub>ratings</sub></span>
                </div>
                <span id='meta'>{this.props.item.metatitle.length > 23 ? this.props.item.metatitle.substring(0,23)+'...' : this.props.item.metatitle}</span>
                <p>{this.props.item.description.length > 100 ? this.props.item.description.substring(0, 100) + '...':this.props.item.description}</p>
                <button style={{display: this.props.guest ? 'none': 'block'}} onClick={this.props.addToCart}>add to cart</button>
            </div>
            
        </div>
        )
    }
}


export {Card}

// <div className="body-local">
//             <div className="card">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <div class="container">
//                   <p>Architect & Engineer</p>
//                   <p>Edit <code>src/App.js</code> and save to reload.</p>
//                   <DangerAlert name={<b>John Doe</b>}/>
//                   <br/>
//                   <SuccessAlert name={<b>John Doe</b>}/> 
//                 </div>
//             </div>
//         </div>    

// .body-local {
//     position: absolute;
//     width: 100%;
//     height: auto;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     /* background-color: #e86c63; */
// }

// .center {
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .alert {
//     padding: 20px;
//     background-color: #e86c63;
//     color: white;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
// }

// .closebtn {
//     margin-left: 15px;
//     color: white;
//     font-weight: bold;
//     float: right;
//     font-size: 22px;
//     line-height: 20px;
//     cursor: pointer;
//     transition: 0.3s;
// }
  
// .closebtn:hover {
//     color: black;
// }

// .card {
//     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//     transition: 0.3s;
//     width: auto;
//     padding: 10px;
//     background-color: #f1f2f6;
// }
  
// .card:hover {
//     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }
  
// .container {
//     padding: 2px 16px;
// }