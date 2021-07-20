import React, { Component } from 'react'
import axios from 'axios';
import './GetOrders.css';

export default class Orders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    handleButtonClick = () => {
        axios.get("/orders").then(response => {
            console.log(response.data)
            this.setState({
                orders: response.data
            });
        })
    }

    render() {
        return(
            <div>
                <button class="button" onClick={this.handleButtonClick}> View Pizza Orders</button>
                {this.state.orders.map((order) => (
                    <div class="cards">
                        <p class="tableno">Table Number: {order.Table_No}</p>
                        <p>Crust: {order.Crust}</p>
                        <p>Flavor: {order.Flavor}</p>
                        <p>Size: {order.Size}</p>
                    </div>
                ))}
            </div>
        );
    }

}

export { Orders }