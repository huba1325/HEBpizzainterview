import React, { Component } from 'react'
import axios from 'axios';


const accesstoken = 'a2de15df832cfb5ef25b1ea13a837c0bb451d9d1da3229eb485d0add38c04e0f'
const apiURL = 'https://order-pizza-api.herokuapp.com/api/'

const authAxios = axios.create({
  apiURL,
  headers: {
    Authorization: `Bearer ${accesstoken}`,
    'Content-Type': 'application/json'
  },
  proxy: {
    host: 'localhost',
    port: '5000'
  }
})

const json = {
    "Crust": "string",
    "Flavor": "string",
    "Size": "string",
    "Table_No": 0
  };

export default class SendOrders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    handleButtonClick = () => {
        authAxios.post("/orders", json).then(response => {
            console.log(response.data)
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleButtonClick}> Send in order </button>
            </div>
        );
    }

}

export { SendOrders }