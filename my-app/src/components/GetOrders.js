import React, { useState, useCallback } from 'react'
import axios from 'axios';


const accesstoken = 'a2de15df832cfb5ef25b1ea13a837c0bb451d9d1da3229eb485d0add38c04e0f'
const apiURL = 'https://order-pizza-api.herokuapp.com/api/'

const authAxios = axios.create({
  apiURL,
  headers: {
    Authorization: `Bearer ${accesstoken}`
  }
})

export const GetOrders = () => {

    const [orders, setOrders] = useState();
    const [requestError, setRequestError] = useState();
    
    const fetchData = useCallback(async () => {
        try {
            const results = await authAxios.get(`${apiURL}/orders`);
            setOrders(results.data);
        } catch (err) {
            setRequestError(err.message)
        }
    });
    console.log(orders)


    // constructor() {
    //     super();
    //     this.state = {
    //         order: "no orders yet"
    //     };
    // }

    //     componentDidMount() {

    //     var reqData = {
    //             "Crust": "string",
    //             "Flavor": "string",
    //             "Order_ID": 0,
    //             "Size": "string",
    //             "Table_No": 0,
    //             "Timestamp": "string"
    //         };
    //      axios({
    // method: 'get',
    // url: 'https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/orders',
    // data: (reqData),   
    // headers: { 
    //   "Content-Type": "application/json",
    // }
    // }).then((response) =>{
    //         console.log(response)
    //         //this.setstate({
    //         //     orders: response...
    //         // })
    //     }).catch((error) =>{
    //         console.log(error);
    //     })
    // }
        return (
            <div>
                <button onClick={() => fetchData()}> Look at orders </button>
                <h1> {orders} </h1>
            </div>
        )
    };

export default { GetOrders }