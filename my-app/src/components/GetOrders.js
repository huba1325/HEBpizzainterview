import React, { Component } from 'react'
import axios from 'axios';
import './GetOrders.css';
import { Grid } from '@material-ui/core';

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
            <Grid container>
                {this.state.orders.map((order) => (
                    <Grid item class="cards">
                        <p class="tableno">Table Number: {order.Table_No}</p>
                        <p>Crust: {order.Crust}</p>
                        <p>Flavor: {order.Flavor}</p>
                        <p>Size: {order.Size}</p>
                    </Grid>
                ))}
            </Grid>
            </div>

        );
    }

}

export { Orders }