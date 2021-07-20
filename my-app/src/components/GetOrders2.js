import React, { Component } from 'react'
import axios from 'axios';

export default class Orders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    handleButtonClick = () => {
        axios.get("/orders").then(response => {
            this.setState({
                orders: response.data
            });
        })
    }

    render() {
        const orderData = this.state.orders.map(order => {
return })
        return(
            <div>
                <button onClick={this.handleButtonClick}></button>
                <h1>orders are:</h1>
                {this.state.orders.map((order) => (
                    <div>
                        <p>Flavor: {order.Flavor}</p>
                        <p>Crust: {order.Crust}</p>
                    </div>
                ))}
            </div>
        );
    }

}

export { Orders }