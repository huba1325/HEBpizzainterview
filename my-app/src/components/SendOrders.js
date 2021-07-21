import React, { Component } from 'react'
import axios from 'axios';


const accesstoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjY4MjkwNzAsIm5iZiI6MTYyNjgyOTA3MCwianRpIjoiMGFjNDcxOTctNWM0Ni00NTdiLTljYWQtNzFlMmI5Yjk3ZjBkIiwiZXhwIjoxNjI2ODI5OTcwLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.La3tr9VNQlY_w7W_sliXCBE3qFMAjacbcnh80x72wdI'
const apiURL = 'https://order-pizza-api.herokuapp.com/api/'

const authAxios = axios.create({
  apiURL,
  headers: {
    Authorization: `Bearer ${accesstoken}`,
    'Content-Type': 'application/json'
  },
  //axios call always went to port 3000 still?
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